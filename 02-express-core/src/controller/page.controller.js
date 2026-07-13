const pageService = require("../services/page.service");
const { sendSuccess, sendError } = require("../utils/response.util");

const aboutPage = (req, res) => {
  try {
    const message = pageService.getAboutMessage();
    return sendSuccess(res, 200, "About page content fetched successfully", {
      message,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to load about page", error);
  }
};

const contactPage = (req, res) => {
  try {
    const message = pageService.getContactMessage();

    return sendSuccess(res, 200, "Contact page content fetched successfully", {
      message,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to load contact page", error);
  }
};

const protectedPage = (req, res) => {
  try {
    const message = pageService.getProtectedMessage();
    return sendSuccess(
      res,
      200,
      "Protected page content fetched successfully",
      { message },
    );
  } catch (error) {
    return sendError(res, 500, "Failed to load protected page", error);
  }
};

module.exports = { aboutPage, contactPage, protectedPage };
