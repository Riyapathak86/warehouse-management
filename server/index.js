import express from "express";
import cors from "cors";
import pg from "pg";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());



// DATABASE
const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect(async (err) => {
  if (err) {
    console.error("❌ DB Error:", err);
  } else {
    console.log("✅ DB Connected");
  }
});



// GET PRODUCTS
app.get("/", async (req, res) => {

    try {

        const result = await db.query(
            "SELECT * FROM products"
        );

        res.send(result.rows);

    }

    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Failed To Fetch Products"
        });

    }

});




// REGISTER API
app.post("/api/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        console.log(name, email, password);



        // HASH PASSWORD
        const hashPassword = await bcrypt.hash(
            password,
            10
        );



//         // INSERT USER
        await db.query(
            "INSERT INTO users(name,email,password) VALUES($1,$2,$3)",
            [name, email, hashPassword]
        );



        res.json({
            success: true,
            message: "User Registered Successfully"
        });

    }

    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Registration Failed"
        });

    }

});

app.delete("/api/removefromcart", async (req, res) => {

  const { username, productId } = req.body;

  await db.query(
    `DELETE FROM cart
     WHERE username = $1
     AND product_id = $2`,
    [username, productId]
  );

  res.json({
    success: true,
    message: "Item Removed Successfully"
  });

});

app.post("/api/addcustomer", async (req, res) => {

  try {

    const {
      customerName,
      phone,
      address
    } = req.body;

    await db.query(

      `INSERT INTO customers
      (
        customer_name,
        phone,
        address
      )
      VALUES($1,$2,$3)`,

      [
        customerName,
        phone,
        address
      ]

    );

    res.json({
      success: true,
      message: "Customer Added Successfully"
    });

  } catch (err) {

    console.log(err);

    res.json({
      success: false,
      message: "Something Went Wrong"
    });

  }

});

app.get("/api/customers", async (req, res) => {

  try {

    const result = await db.query(

      `SELECT *
       FROM customers
       ORDER BY customer_name`

    );

    res.json(result.rows);

  } catch (err) {

    console.log(err);

    res.json([]);

  }

});
app.post("/api/addpurchase", async (req, res) => {

  try {

    const {

      customerId,
      amount,
      comment

    } = req.body;

    await db.query(

      `INSERT INTO customer_ledger
      (
        customer_id,
        type,
        amount,
        comment
      )
      VALUES($1,$2,$3,$4)`,

      [
        customerId,
        "Purchase",
        amount,
        comment
      ]

    );

    res.json({

      success: true,
      message: "Purchase Added"

    });

  }

  catch(err){

    console.log(err);

    res.json({

      success:false

    });

  }

});

app.post("/api/addpayment", async (req, res) => {

  try {

    const {

      customerId,
      amount,
      paymentMode,
      comment

    } = req.body;

    await db.query(

      `INSERT INTO customer_ledger
      (
        customer_id,
        type,
        amount,
        payment_mode,
        comment
      )
      VALUES($1,$2,$3,$4,$5)`,

      [

        customerId,

        "Payment",

        amount,

        paymentMode,

        comment

      ]

    );

    res.json({

      success:true,

      message:"Payment Added"

    });

  }

  catch(err){

    console.log(err);

    res.json({

      success:false

    });

  }

});

// // LOGIN API
app.post("/api/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        console.log(email, password);



        // FIND USER
        const result = await db.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );



        const user = result.rows[0];



        
        if (!user) {

            return res.json({
                success: false,
                message: "User Not Found",
                user,
            });

        }



        // PASSWORD MATCH
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );



        // WRONG PASSWORD
        if (!isMatch) {

            return res.json({
                success: false,
                message: "Wrong Password"
            });

        }

// ADMIN LOGIN
if (user.name === "admin") {

    return res.json({
        success: true,
        message: "Admin Login Successful",
        role: "admin",
        user
    });

}

  // USER LOGIN
return res.json({
    success: true,
    message: "User Login Successful",
    role: "user",
    user
});

    }

    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Login Failed"
        });

    }

});


// ADD PAINTER
app.post("/addpainter", async (req, res) => {

  try {

    const { painter, value } = req.body;

    console.log("Painter =", painter);

    await db.query(
      `
      INSERT INTO painters
      (
        name,
        total_profit
      )
      VALUES($1,$2)
      `,
      [painter, value]
    );

    res.json({
      success: true,
      message: "Painter Added Successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed To Add Painter"
    });

  }

});


// GET ALL PAINTERS
app.get("/allpainters", async (req, res) => {

  try {

    const result = await db.query(
      `
      SELECT *
      FROM painters
      ORDER BY total_profit DESC
      `
    );

    res.json(result.rows);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed To Fetch Painters"
    });

  }

});

// ADD PRODUCT API
app.post("/addproduct", async (req, res) => {

    try {

        const {
            productname,
            category,
            price,
            mrp,
            stockqty,
            image,
            tagline,
            description,
            features
        } = req.body;



        console.log(
            productname,
            category,
            price,
            mrp,
            stockqty,
            image,
            tagline,
            description,
            features
        );



        // INSERT PRODUCT
        await db.query(
            `
            INSERT INTO products
            (
                name,
                category,
                price,
                mrp,
                stock,
                image,
                tagline,
                description,
                features
            )

            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
            `,
            [
                productname,
                category,
                price,
                mrp,
                stockqty,
                image,
                tagline,
                description,
                features
            ]
        );



        res.json({
            success: true,
            message: "Product Added Successfully"
        });

    }

    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Product Add Failed"
        });

    }

});


app.post("/addsite", async (req, res) => {

  try {

    const {
      painterId,
      siteName,
      profit
    } = req.body;

    console.log("Painter Id =", painterId);
    console.log("Site Name =", siteName);
    console.log("Profit =", profit);

    const insertResult = await db.query(
      `
      INSERT INTO sites
      (
        painter_id,
        site_name,
        profit
      )
      VALUES($1,$2,$3)
      RETURNING *
      `,
      [
        painterId,
        siteName,
        profit
      ]
    );

    console.log("Inserted Site =", insertResult.rows[0]);

    const updateResult = await db.query(
      `
      UPDATE painters
      SET total_profit =
      (
        SELECT COALESCE(
          SUM(profit),
          0
        )
        FROM sites
        WHERE painter_id = $1
      )
      WHERE id = $1
      RETURNING *
      `,
      [painterId]
    );

    console.log("Updated Painter =", updateResult.rows[0]);

    res.json({
      success: true,
      message: "Site Added Successfully"
    });

  } catch (err) {

    console.log("ERROR =", err);

    res.status(500).json({
      success: false,
      message: "Failed To Add Site"
    });

  }

});













app.post("/api/addtocart", async (req, res) => {

  const {
    username,
    productId,
    quantity,
    productName,
    productImage,
    price
  } = req.body;
  console.log(username);
  console.log(productId);
  console.log(quantity);
  console.log("Request Body:", req.body);

  try {

    const result = await db.query(
      `INSERT INTO cart
      (
        username,
        product_id,
        product_name,
        product_image,
        price,
        quantity
      )
      VALUES($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [
        username,
        productId,
        productName,
        productImage,
        price,
        quantity
      ]
    );

    console.log("Inserted:", result.rows);

    return res.status(200).json({
      success: true,
      message: "Product Added To Cart",
      cart: result.rows
    });

  } catch (err) {

    console.error("DB ERROR:", err);

    return res.status(500).json({
      success: false,
      error: err.message
    });
  }

});


app.get("/api/cart/:username", async (req, res) => {

  const { username } = req.params;

  const result = await db.query(
    "SELECT * FROM cart WHERE username=$1",
    [username]
  );

  res.json(result.rows);

});

app.post("/api/updatestock", async (req, res) => {
  console.log("API HIT");
  console.log(req.body);
  const { productId, quantity } = req.body;

  await db.query(
    `UPDATE products
     SET stock = stock - $1
     WHERE id = $2`,
    [quantity, productId]
  );

  res.json({
    success: true,
    message: "Stock Updated"
  });

});

app.post("/api/placeorder", async (req, res) => {

  const { username,  fullName,
  phone,
  address,
  city,
  pincode } = req.body;

const cartItems = await db.query(
  `SELECT * FROM cart
   WHERE username = $1`,
  [username]
);

for (const item of cartItems.rows) {

console.log(
  username,
  fullName,
  phone,
  address,
  city,
  pincode
);
  await db.query(
    `INSERT INTO orders
    (
      username,
        full_name,
    phone,
    address,
    city,
    pincode,
      product_id,
      product_name,
      product_image,
      price,
      quantity
    )
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
    [
      username,
        fullName,
  phone,
  address,
  city,
  pincode,

      item.product_id,
      item.product_name,
      item.product_image,
      item.price,
      item.quantity
    ]








    
  );
await db.query(
  `UPDATE products
   SET stock = stock - $1
   WHERE id = $2`,
  [
    item.quantity,
    item.product_id
  ]
);
}
await db.query(
  `DELETE FROM cart
   WHERE username = $1`,
  [username]
);
res.json({
  success: true,
  message: "Order Placed Successfully"
});



});

app.get("/api/orders", async (req, res) => {
  console.log("Orders API Hit"); 
  const result = await db.query(
    `SELECT * FROM orders`
  );

  res.json(result.rows);

});



app.post("/api/addcustomer", async (req, res) => {

  try {

    const {
      customerName,
      phone,
      address,
      purchase,
      payment
    } = req.body;

    await db.query(

      `INSERT INTO customers
      (
        customer_name,
        phone,
        address,
        purchase,
        payment
      )
      VALUES($1,$2,$3,$4,$5)`,

      [
        customerName,
        phone,
        address,
        purchase,
        payment
      ]

    );

    res.json({
      success: true,
      message: "Customer Added Successfully"
    });

  } catch (err) {

    console.log(err);

    res.json({
      success: false
    });

  }

});

app.get("/api/customers", async (req, res) => {

  try {

    const result = await db.query(

      `SELECT *,
      (purchase-payment) AS due

      FROM customers

      ORDER BY due DESC`

    );

    res.json(result.rows);

  } catch (err) {

    console.log(err);

  }

});



// db.connect()
//   .then(() => {
//     console.log("✅ DB Connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


app.listen(3000, () => {
  console.log("🚀 Server Running on Port 3000");
});