require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const routes = require("./router/routes.js");
const Admission = require("./models/admissionSchema.js");
const adminRouter = require("./router/adminRoutes.js");
require("./connection/conn");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// Middlewares:
app.use(express.urlencoded({ extended: false }));

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];
    let endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;
    console.log("endpointSecret", endpointSecret);
    console.log("sig", sig);
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log(event);
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        console.log(paymentIntentSucceeded);
        console.log("PaymentId:", paymentIntentSucceeded.id);
        const findStudent = await Admission.findOne({
          studentId: paymentIntentSucceeded.metadata.studentId,
          studentClass: paymentIntentSucceeded.metadata.studentClass,
          session: paymentIntentSucceeded.metadata.session,
        });

        if (findStudent) {
          const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          const d = new Date();
          let day = d.getDate();
          let monthName = month[d.getMonth()];
          let year = d.getFullYear();

          const paymentData = findStudent.paymentData;
          const addPaymentDetails = {
            paymentId: paymentIntentSucceeded.id,
            paymentDate: day,
            paymentMonth: monthName,
            paymentYear: year,
            feeStatus: "received",
          };
          paymentData.push(addPaymentDetails);
          await findStudent.save();
          break;
        }
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    allowedHeaders:
      "Content-Type,Authorization,Origin,X-Auth-Token,Accept,Referer",
    preflightContinue: true,
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(routes);
app.use("/admin", adminRouter);
app.use("/achievementImages", express.static("achievementImages"));
app.use("/studentsImages", express.static("studentsImages"));

const PORT = process.env.PORT || 8080;
// Server listening:
app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
