const AWS = require('aws-sdk')
/*
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = 'kBRSmBD77oP4yOGS3mIC';
const secret_key = 'Fuyyypt4SwgHI8svvnvS2BHOj5uLssZMqakjm1k0';
*/

AWS.config.s3 = {endpoint: 'https://kr.object.ncloudstorage.com' };
AWS.config.update({region: 'kr-standard'});
AWS.config.update({accessKeyID: 'kBRSmBD77oP4yOGS3mIC'});
AWS.config.update({secretAccessKey: 'Fuyyypt4SwgHI8svvnvS2BHOj5uLssZMqakjm1k0'});

const S3 = new AWS.S3({apiVersion: '2006-03-01'});

const bucket_name = 'my-bucket1';
const params = {Bucket: 'multicam-2021-03', Key: 'trans2/KakaoTalk_20210330_155546243_000010.png', Expires: 60}
/*
(async () => {
         await S3.createBucket({
             Bucket: bucket_name,
             CreateBucketConfiguration: {}
           }).promise()
         })();
*/

S3.getSignedUrl('getObject', params, function (err, url) {
    console.log('Signed URL: ' + url)
});

(async () => {
         let { Buckets } = await S3.listBuckets().promise();

         for(let bucket of Buckets) {
             console.log(bucket.Name);
         }
     })();
