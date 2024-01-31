(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

var url = "https://api.krishnaconsciousnesssociety.com/api/content-control";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data?.data);
    document.getElementById(
      "counter"
    ).innerHTML = `${data?.data?.attributes?.cowsFed}/${data?.data?.attributes?.cowCareTarget}`;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

const fodderDonors = [
  "Anjali 5Kg",
  "Neha sharma 5Kg",
  "Ankit Govind 5Kg",
  "Itisha Arora 5Kg",
  "Jyoti Roy 5Kg",
  "Karankumar Gandhi 5Kg",
  "Mahati 5Kg",
  "Atharv  5Kg",
  "Deepti 5Kg",
  "Aniket Sharma 5Kg",
  "Aniket Sharma 5Kg",
  "Paniraj Potdar 5Kg",
  "Megha Rawat 5Kg",
  "Swagath Boora 5Kg",
  "Deepti 5Kg",
  "Shobitha Krishnamurthy  5Kg",
  "Murali Mohan 5Kg",
  "Trivikram  5Kg",
  "Trivikram  5Kg",
  "Shubham Mishra 5Kg",
  "Sarvesh  5Kg",
  "Neha bisht 5Kg",
  "Kiranbhai Mali 5Kg",
  "Anjani 5Kg",
  "Dhruveer Richa Bhatt 5Kg",
  "Ram Das 5Kg",
  "Amit ratwaya  5Kg",
  "Pari vyas 5Kg",
  "Kiranbhai Mali 5Kg",
  "Ashish  5Kg",
  "Himanshi 5Kg",
  "Yash Singh Rajput 5Kg",
  "Radhika Mathuria 5Kg",
  "Anjali Yadav 5Kg",
  "Mahima Govind 5Kg",
  "Yuvraj Singh  5Kg",
  "Abhimanyu Verma  5Kg",
  "Karankumar Gandhi 5Kg",
  "Ashi shah 5Kg",
  "Kamini Thakur 5Kg",
  "Vivek Sharma  5Kg",
  "Jha Suman 5Kg",
  "Dravit Aggarwal  5Kg",
  "Shubham Swarajyaprakash Singh 5Kg",
  "Nikhilalokesh 5Kg",
  "Himanshu patil 5Kg",
  "Parth Hiteshbhai pithava  5Kg",
  "VARUN KESARWANI  5Kg",
  "Vishav Khajuria  5Kg",
  "BASODE UDAY KUMAR 5Kg",
  "Mansi 5Kg",
  "Siddhi Deshmukh  5Kg",
  "Meenakshi Sharma 5Kg",
  "Iskon rishikesh 5Kg",
  "Dibyanshu Ranjan 5Kg",
  "Aditya Mishra 5Kg",
  "SAURAV KANT 5Kg",
  "Sonera Parth 5Kg",
  "Shashwat Tiwari 5Kg",
  "Sachin Mishra 5Kg",
  "Abhishek Pattan  5Kg",
  "Shraddha Zore 5Kg",
  "Lakshmi Nandan K  5Kg",
  "Divyanshu  5Kg",
  "Chandra Shekhar 5Kg",
  "Varnita Mishra 5Kg",
  "Chauhan Krish Pravinbhai  5Kg",
  "Abhinaba Bhowmick 5Kg",
  "Lakshmi Patil  5Kg",
  "Vishakha  5Kg",
  "Nikunj Sheer 5Kg",
  "N Kalyani 5Kg",
  "Priya Mishra  5Kg",
  "Sayan Chakraborty 5Kg",
  "Vijay  5Kg",
  "Abhishek Singh 5Kg",
  "Akanksha Venkat 5Kg",
  "Ashok yadav Marathe 5Kg",
  "a  5Kg",
  "Kankana Baruah  5Kg",
  "Netr 5Kg",
  "Happy 5Kg",
  "Bp 5Kg",
  "Radhika Mathuria 5Kg",
  "Varunsai 5Kg",
  "Vaishali  5Kg",
  "Bhavika tehalyani 5Kg",
  "nishu Sharma  5Kg",
  "Loknath singh 5Kg",
  "Karthik  5Kg",
  "Saumya Tiwari 5Kg",
  "Amey Shendage 5Kg",
  "Anonymous  5Kg",
  "Priya Gupta  5Kg",
  "Tushar Rana 5Kg",
  "Pranaykumar bandari 5Kg",
  "Anjali  5Kg",
  "Anusmita Mandal 5Kg",
  "Richa 5Kg",
  "Anuradha Devi Dasi (Aparna) 5Kg",
  "Rakesh Kumar Das 5Kg",
  "Pareekshitha Salian 5Kg",
  "Komal Singh 5Kg",
  "Abhinaba Bhowmick  5Kg",
  "Vaishnavi  5Kg",
  "Isha shruti 5Kg",
  "Isha shruti 5Kg",
  "Pankaj Manik 5Kg",
  "P Vinay Kumar 5Kg",
  "Prakhar Singh 5Kg",
  "Abhishek Sanganeria  5Kg",
  "Sneha Vani 5Kg",
  "Atharva Lolekar 5Kg",
  "Priyanshu mrinal  5Kg",
  "Mani 5Kg",
  "Prasad Deshpande 5Kg",
  "Devansh Tiwari 5Kg",
  "ALKATI KARTHIK 5Kg",
  "Bhumika Sharma  5Kg",
  "Vishakha  5Kg",
  "Sanjay Chakraborty 5Kg",
  "Kridha  5Kg",
  "PRASANJIT SHOW 5Kg",
  "Ayush Malhotra  5Kg",
  "Dev 5Kg",
  "Akhila Ravikumar  5Kg",
  "Vinitha  5Kg",
  "Anonymous  5Kg",
  "Sayan Chakraborty 5Kg",
  "Vinayak Bhakuni 5Kg",
  "A A VN Shukla  5Kg",
  "Krishna 5Kg",
  "Krishna 5Kg",
  "Meenakshi Sharma 5Kg",
  "Vahid Minglani  5Kg",
  "Pratham 5Kg",
  "Pratham 5Kg",
  "Riya ramesh sharma 5Kg",
  "Shreeya Shekhar Sarode  5Kg",
];

const carrotDonors = [
  "Neha sharma 1Kg",
  "Ankit Govind 1Kg",
  "Jyoti Roy 1Kg",
  "Karankumar Gandhi 4Kg",
  "Mahati 4Kg",
  "Atharv  4Kg",
  "Trivikram  4Kg",
  "Trivikram  4Kg",
  "Bhuvanamuninarayana  4Kg",
  "Neha bisht 4Kg",
  "Anjani 4Kg",
  "Dhruveer Richa Bhatt 4Kg",
  "Vaibhav  4Kg",
  "Himanshi 4Kg",
  "Yash Singh Rajput 4Kg",
  "Radhika Mathuria 4Kg",
  "Mahima Govind 4Kg",
  "Yuvraj Singh  4Kg",
  "Karankumar Gandhi 4Kg",
  "Krishna 4Kg",
  "Samrat Banerjee 4Kg",
  "Kamini Thakur 4Kg",
  "Vivek Sharma  4Kg",
  "Dravit Aggarwal  4Kg",
  "Arjun agrawal 4Kg",
  "Himanshu patil 4Kg",
  "Iskon rishikesh 4Kg",
  "Samrat Banerjee 4Kg",
  "Sonera Parth 4Kg",
  "Shashwat Tiwari 4Kg",
  "Sachin Mishra 4Kg",
  "Rohith 4Kg",
  "Lakshmi Nandan K  4Kg",
  "Divyanshu  4Kg",
  "Abhinaba Bhowmick 4Kg",
  "Lakshmi Patil  4Kg",
  "Ritika singh Chauhan  4Kg",
  "N Kalyani 4Kg",
  "Priya Mishra  4Kg",
  "Vijay  4Kg",
  "Abhishek Singh 4Kg",
  "Netr 4Kg",
  "Bp 4Kg",
  "Pahi Das 4Kg",
  "Patel jiya Navin bhai  4Kg",
  "Bhavika tehalyani 4Kg",
  "Amey Shendage 4Kg",
  "Anonymous  4Kg",
  "Priya Gupta  4Kg",
  "Tushar Rana 4Kg",
  "Pranaykumar bandari 4Kg",
  "Monalisha Mundary 4Kg",
  "Anjali  4Kg",
  "Anusmita Mandal 4Kg",
  "Anuradha Devi Dasi (Aparna) 4Kg",
  "Priyanka pandit  4Kg",
  "Komal Singh 4Kg",
  "Yash J Mehta 4Kg",
  "Paniraj Potdar  4Kg",
  "Pankaj Manik 4Kg",
  "P Vinay Kumar 4Kg",
  "Prakhar Singh 4Kg",
  "Abhishek Sanganeria  4Kg",
  "Mani 4Kg",
  "Prasad Deshpande 4Kg",
  "ALKATI KARTHIK 4Kg",
  "Adi 4Kg",
  "Priyansu Saha  4Kg",
  "Bhumika Sharma  4Kg",
  "Bhuvanamuninarayana  4Kg",
  "Dev 4Kg",
  "Akhila Ravikumar  4Kg",
  "Vinitha  4Kg",
  "Anonymous  4Kg",
  "Shilpamalappa  4Kg",
  "paniraj Potdar  4Kg",
  "A A VN Shukla  4Kg",
];

const jaggeryDonors = [
  "Neha sharma 1Kg",
  "Ankit Govind 1Kg",
  "Itisha Arora 1Kg",
  "Jyoti Roy 1Kg",
  "Blessing Daniel 1Kg",
  "Karankumar Gandhi 1Kg",
  "Mahati 1Kg",
  "Atharv  1Kg",
  "Deepti 1Kg",
  "Aradhya Khullar  1Kg",
  "Lucky 1Kg",
  "Bhuvanamuninarayana  1Kg",
  "Ivaskillshare 1Kg",
  "Neha bisht 1Kg",
  "Anjani 1Kg",
  "Dhruveer Richa Bhatt 1Kg",
  "Pari vyas 1Kg",
  "Himanshi 1Kg",
  "Yash Singh Rajput 1Kg",
  "Radhika Mathuria 1Kg",
  "Lucky  1Kg",
  "Mahima Govind 1Kg",
  "Karankumar Gandhi 1Kg",
  "Kamini Thakur 1Kg",
  "Vivek Sharma  1Kg",
  "Dravit Aggarwal  1Kg",
  "Himanshu patil 1Kg",
  "Sweta Gupta 1Kg",
  "Jayant choudhary 1Kg",
  "Pratyush yadav 1Kg",
  "Iskon rishikesh 🙏♾️ 1Kg",
  "Lucky  1Kg",
  "Sonera Parth 1Kg",
  "Shashwat Tiwari 1Kg",
  "Sachin Mishra 1Kg",
  "Rohith 1Kg",
  "Lakshmi Nandan K  1Kg",
  "Divyanshu  1Kg",
  "Varnita Mishra 1Kg",
  "Isha shruti  1Kg",
  "Abhinaba Bhowmick 1Kg",
  "Lakshmi Patil  1Kg",
  "Priya Mishra  1Kg",
  "Dikshitha Aakula 1Kg",
  "Vijay  1Kg",
  "Abhishek Singh 1Kg",
  "Netr 1Kg",
  "Bp 1Kg",
  "Radhika Mathuria 1Kg",
  "nishu Sharma  1Kg",
  "Karthik  1Kg",
  "Amey Shendage 1Kg",
  "Anonymous  1Kg",
  "Priya Gupta  1Kg",
  "Tushar Rana 1Kg",
  "Pranaykumar bandari 1Kg",
  "Anusmita Mandal 1Kg",
  "Richa 1Kg",
  "Anuradha Devi Dasi (Aparna) 1Kg",
  "Pareekshitha Salian 1Kg",
  "Komal Singh 1Kg",
  "Yash J Mehta 1Kg",
  "Abhinaba Bhowmick  1Kg",
  "Aniket Sharma  1Kg",
  "All friends  1Kg",
  "Isha shruti 1Kg",
  "Isha shruti 1Kg",
  "Pankaj Manik 1Kg",
  "P Vinay Kumar 1Kg",
  "Prakhar Singh 1Kg",
  "Abhishek Sanganeria  1Kg",
  "Sneha Vani 1Kg",
  "Vishal ",
  "Mani 1Kg",
  "Prasad Deshpande 1Kg",
  "Bhumika Sharma  1Kg",
  "Plabon  1Kg",
  "Dev 1Kg",
  "Akhila Ravikumar  1Kg",
  "Vinitha  1Kg",
  "Anonymous  1Kg",
  "A A VN Shukla  1Kg",
  "Saloni  1Kg",
  "Shreeya Shekhar Sarode  1Kg",
];

const chapatiDonors = [
  "Neha sharma 12",
  "Ankit Govind 12",
  "Itisha Arora 12",
  "Jyoti Roy 12",
  "Karankumar Gandhi 12",
  "Mahati 12",
  "Atharv  12",
  "Aradhya Khullar  12",
  "Abhranil Sengupta  12",
  "Murali Mohan 12",
  "Vaishnav S K 12",
  "Trivikram  12",
  "Trivikram  12",
  "Ivaskillshare 12",
  "Dhruveer Richa Bhatt 12",
  "Vaibhav  12",
  "Himanshi 12",
  "Yash Singh Rajput 12",
  "Mahima Govind 12",
  "Yuvraj Singh  12",
  "Karankumar Gandhi 12",
  "Ashi shah 12",
  "Samrat Banerjee 12",
  "Muskan Gupta 12",
  "Kamini Thakur 12",
  "Vivek Sharma  12",
  "Ritik  12",
  "Dravit Aggarwal  12",
  "Prakhar Nagesh 12",
  "Himanshu patil 12",
  "Jayant choudhary 12",
  "Siddhi Deshmukh  12",
  "Iskon rishikesh 🙏♾️ 12",
  "Samrat Banerjee 12",
  "Sonera Parth 12",
  "Shashwat Tiwari 12",
  "Sachin Mishra 12",
  "Shraddha Zore 12",
  "Lakshmi Nandan K  12",
  "Dhruvi Modi 12",
  "Varnita Mishra 12",
  "Isha shruti  12",
  "Abhinaba Bhowmick 12",
  "Lakshmi Patil  12",
  "Nikunj Sheer 12",
  "Himanshi 12",
  "Ritika singh Chauhan  12",
  "Priya Mishra  12",
  "Abhay Kadam 12",
  "Ashwani Dubey  12",
  "Vijay  12",
  "Abhishek Singh 12",
  "Kankana Baruah  12",
  "Netr 12",
  "Abhay Kadam 12",
  "Bp 12",
  "Loknath singh 12",
  "Amey Shendage 12",
  "Anonymous  12",
  "Priya Gupta  12",
  "Tushar Rana 12",
  "Pranaykumar bandari 12",
  "Anusmita Mandal 12",
  "Anuradha Devi Dasi (Aparna) 12",
  "Komal Singh 12",
  "Abhinaba Bhowmick  12",
  "Pankaj Manik 12",
  "P Vinay Kumar 12",
  "Prakhar Singh 12",
  "Abhishek Sanganeria  12",
  "Sneha Vani 12",
  "Mani 12",
  "Prasad Deshpande 12",
  "Bhumika Sharma  12",
  "PRASANJIT SHOW 12",
  "Akhila Ravikumar  12",
  "Vinitha  12",
  "Anonymous  12",
  "Tamalika halder  12",
  "Monalisha Mundary 12",
  "Anuraag Vijay  12",
  "A A VN Shukla  12",
  "Nidhi Sharma 12",
  "Riya ramesh sharma 12",
];

fodderDonors.forEach((donor) => {
  var pElement = document.createElement("p");
  pElement.textContent = donor;

  document.getElementById("green-fodder").append(pElement);
});

carrotDonors.forEach((donor) => {
  var pElement = document.createElement("p");
  pElement.textContent = donor;

  document.getElementById("carrot").append(pElement);
});

jaggeryDonors.forEach((donor) => {
  var pElement = document.createElement("p");
  pElement.textContent = donor;

  document.getElementById("jaggery").append(pElement);
});

chapatiDonors.forEach((donor) => {
  var pElement = document.createElement("p");
  pElement.textContent = donor;

  document.getElementById("chapati").append(pElement);
});
