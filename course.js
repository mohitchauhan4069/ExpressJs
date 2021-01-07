 const express = require('express');
 const router = express();

 router.get('/', function(req, res) {
     var out = `<h2>______________Course Section_____________</h2>`;
     out += `<a  href="/courses/Full-Stack-Doveloper">Full Stack Dovelopement</a><br> `;
     out += `<a  href="/courses/Front-End-Dovelopement">Front-End-Dovelopement</a><br> `;
     out += `<a  href="/courses/Digital-Marketing">Digital-Marketing</a><br> `;
     out += `<a  href="/courses/Backend-Dovelopement">Backend-Dovelopement</a><br> `;
     res.send(out);
 });
 router.get('/full-stack', function(req, res) {
     var out = `<h2>______________Full Stack Dovelopement_____________</h2>`;
     out += `<a  href="/courses/Full-Stack-Doveloper">Full Stack Dovelopement</a><br> `;
     out += `<a  href="/courses/Front-End-Dovelopement">Front-End-Dovelopement</a><br> `;
     out += `<a  href="/courses/Digital-Marketing">Digital-Marketing</a><br> `;
     out += `<a  href="/courses/Backend-Dovelopement">Backend-Dovelopement</a><br> `;
     res.send(out);
 });


 router.get('/front-end', function(req, res) {
     var out = `<h2>______________Front-End-Dovelopement_____________</h2>`;
     out += `<a  href="/courses/Full-Stack-Doveloper">Full Stack Dovelopement</a><br> `;
     out += `<a  href="/courses/Front-End-Dovelopement">Front-End-Dovelopement</a><br> `;
     out += `<a  href="/courses/Digital-Marketing">Digital-Marketing</a><br> `;
     out += `<a  href="/courses/Backend-Dovelopement">Backend-Dovelopement</a><br> `;
     res.send(out);
 });


 router.post('/digital-marketing', function(req, res) {
     var out = `<h2>______________Digital Marketing____________</h2>`;
     out += `<a  href="/courses/Full-Stack-Doveloper">Full Stack Dovelopement</a><br> `;
     out += `<a  href="/courses/Front-End-Dovelopement">Front-End-Dovelopement</a><br> `;
     out += `<a  href="/courses/Digital-Marketing">Digital-Marketing</a><br> `;
     out += `<a  href="/courses/Backend-Dovelopement">Backend-Dovelopement</a><br> `;
     res.send(out);
 });
 router.all('/backend-doveloper', function(req, res) {
     var out = `<h2>______________Backend Doveloper_____________</h2>`;
     out += `<a  href="/courses/Full-Stack-Doveloper">Full Stack Dovelopement</a><br> `;
     out += `<a  href="/courses/Front-End-Dovelopement">Front-End-Dovelopement</a><br> `;
     out += `<a  href="/courses/Digital-Marketing">Digital-Marketing</a><br> `;
     out += `<a  href="/courses/Backend-Dovelopement">Backend-Dovelopement</a><br> `;
     res.send(out);
 });
 router.listen(3002);