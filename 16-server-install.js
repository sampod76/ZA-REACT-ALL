
/* vercel deploy ---Modiul 62 full derver install

1)  npm init -y

2)  npm i express cors

3) npm i -g vercel

4) vercel 
*/

 
// =================================================================
/* 
 
vercel.json     সরাসরি রুট ফোল্ডারে বানাতে হবে  vitora pest korta hoba

 
{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}




*/