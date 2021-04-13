const AWS = require('aws-sdk')
/*
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = '_access_key_';
const secret_key = '_secret_key_';
*/

AWS.config.s3 = {endpoint: 'https://kr.object.ncloudstorage.com' };
AWS.config.update({region: 'kr-standard'});
AWS.config.update({accessKeyID: '[accesskey]'});
AWS.config.update({secretAccessKey: '[secretKey]'});

const S3 = new AWS.S3({apiVersion: '2006-03-01'});

const bucket_name = '[bucket name]';
const params = {Bucket: bucket_name, Key: '[fiel path]', Expires: 60}
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
