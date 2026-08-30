const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const sanitizedExt = path.extname(file.originalname).toLowerCase();
    cb(null, `attachment-${uniqueSuffix}${sanitizedExt}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = /jpeg|jpg|png|webp|gif|pdf|doc|docx|txt/;
  const extname = allowedExtensions.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = /image\/(jpeg|jpg|png|webp|gif)|application\/(pdf|msword|vnd\.openxmlformats-officedocument\.wordprocessingml\.document)|text\/plain/.test(
    file.mimetype
  );

  if (extname && (mimetype || file.mimetype.startsWith('image/'))) {
    return cb(null, true);
  } else {
    cb(
      new Error(
        'Invalid file type. Allowed formats: Images (JPG, PNG, WEBP, GIF), PDF, DOC, DOCX, TXT.'
      )
    );
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max limit
  },
  fileFilter: fileFilter,
});

module.exports = upload;
