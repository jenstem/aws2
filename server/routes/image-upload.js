const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
});

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    },
});

const upload = multer({ storage }).single('image');