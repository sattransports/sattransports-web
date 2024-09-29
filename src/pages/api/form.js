import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { formType } = req.body;

    let emailContent = "";

    if (formType === "contact") {
      const { firstName, lastName, email, mobile, message } = req.body;
      emailContent = `
        <h3>Contact Form Submission</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    } else if (formType === "vehicleAttachment") {
      const {
        name,
        contact,
        email,
        city,
        vehicleName,
        vehicleType,
        fuelType,
        registrationNumber,
        registrationDate,
      } = req.body;
      emailContent = `
        <h3>Vehicle Attachment Form Submission</h3>
        <p><strong>Driver/Owner Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Vehicle Name:</strong> ${vehicleName}</p>
        <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
        <p><strong>Fuel Type:</strong> ${fuelType}</p>
        <p><strong>Registration Number:</strong> ${registrationNumber}</p>
        <p><strong>Registration Date:</strong> ${registrationDate}</p>
      `;
    }
    console.log("email ----> content ------>", emailContent);
    const transporter = nodemailer.createTransport({
      service: "gmail", // or other email service
      auth: {
        user: "gokulhari1999@gmail.com",
        pass: "jayanthiGokul@1999",
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "gokulhari1999@gmail.com", // Add your recipient email here
        subject:
          formType === "contact"
            ? "Contact Form Submission"
            : "Vehicle Attachment Form Submission",
        html: emailContent,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
