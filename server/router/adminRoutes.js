const express = require("express");
const newNotice = require("../controller/Admin/noticeBoard/newNotice");
const notifications = require("../controller/Admin/noticeBoard/getNotifications");
const updateNotice = require("../controller/Admin/noticeBoard/updateNotice");
const deleteNotice = require("../controller/Admin/noticeBoard/deleteNotice");
const newAdminSettings = require("../controller/Admin/AdminHomepage/newAdminSettings");
const adminSettings = require("../controller/Admin/AdminHomepage/adminSettings");
const adminChangeSession = require("../controller/Admin/AdminHomepage/adminChangeSession");
const allStudentsAdmin = require("../controller/Admin/AdminHomepage/allStudentsAdmin");
const newEvent = require("../controller/Admin/EventsBoard/newEvent");
const getEvents = require("../controller/Admin/EventsBoard/getEvents");
const updateEvent = require("../controller/Admin/EventsBoard/updateEvent");
const deleteEvent = require("../controller/Admin/EventsBoard/deleteEvent");
const admissions = require("../controller/Admissions/admissions");
const updateAdmission = require("../controller/Admissions/updateAdmission");
const deleteAdmission = require("../controller/Admissions/deleteAdmission");
const upload = require("../config/achievementsImagesStorageConfiguration");
const newAchievement = require("../controller/Admin/AchievementsBoard/newAchievement");
const achievements = require("../controller/Admin/AchievementsBoard/getAchievements");
const deleteAchievement = require("../controller/Admin/AchievementsBoard/deleteAchievement");
const adminAuth = require("../middlewares/adminAuth");
const loginAdmin = require("../controller/Auth/loginAdmin");
const registerAdmin = require("../controller/Auth/registerAdmin");
const filterStudents = require("../controller/Admin/AdminHomepage/filterStudents");
const logoutAdmin = require("../controller/Auth/logoutAdmin");
const adminRouter = express.Router();

// Admin ----->>>>>
adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/logout", logoutAdmin);

// Check Authenticated Admin
adminRouter.get("/", adminAuth, (req, res) => {
  res.status(200).json({ msg: "verified Admin" });
});

// NoticeBoard Routes ------>>>>>>>
adminRouter.post("/noticeboard", newNotice);
adminRouter.get("/noticeboard", notifications);
adminRouter.patch("/noticeboard", updateNotice);
adminRouter.delete("/noticeboard/:id", deleteNotice);

//Admin Control Routes ------>>>>>>>>>>
adminRouter.post("/controls", newAdminSettings);
adminRouter.get("/controls", adminSettings);
adminRouter.patch("/controls/changesession/:id", adminChangeSession);

// Admin Data Routes ------------>>>>>>>>>>>>
adminRouter.get("/students/:session", allStudentsAdmin);
adminRouter.post("/filterStudents", filterStudents);

// AchievementsBoard Routes ------>>>>>>>
adminRouter.post(
  "/achievementsboard",
  upload.single("achievementImage"),
  newAchievement
);
adminRouter.get("/achievementsboard", achievements);
adminRouter.delete("/achievementsboard/:id", deleteAchievement);

// EventsBoard Routes ------>>>>>>>
adminRouter.post("/eventsboard", newEvent);
adminRouter.get("/eventsboard", getEvents);
adminRouter.patch("/eventsboard", updateEvent);
adminRouter.delete("/eventsboard/:id", deleteEvent);

// Admissions Routes -------->>>>>>>>>
adminRouter.get("/admissions", admissions);
adminRouter.patch("/adminssions/:rejectionMsg", updateAdmission);
adminRouter.delete("/adminssions/:id", deleteAdmission);

module.exports = adminRouter;
