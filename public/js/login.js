  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBbWxTeyMWx0PSkCmEHVBqA7MUHsgd4XOs",
    authDomain: "nysl-site.firebaseapp.com",
    databaseURL: "https://nysl-site.firebaseio.com",
    projectId: "nysl-site",
    storageBucket: "nysl-site.appspot.com",
    messagingSenderId: "866640227804",
    appId: "1:866640227804:web:4692d2558a3becbb017319"
  };

  firebase.initializeApp(firebaseConfig);

  var app = new Vue({
    el: "#app",
    data: {
      email: "",
      password: "",
      mensaje: "",
      mensajes: [],
      user: null,
      numberGame: "",
      show: "",
      games: [{
          src1: "img/U11.png",
          Date: "sep/01 - 9:30 a.m",
          Location: "AJ Katzenmaier",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U44.png',
          Num: "Juego-1"
        },
        {
          src1: "img/U33.png",
          Date: "sep/01 - 13:00",
          Location: "Greenbay",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U22.png',
          Num: "Juego-2",

        },
        {
          src1: "img/U55.png",
          Date: "sep/08- 9:30 a.m",
          Location: "Howard A Yeager",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U66.png',
          Num: "Juego-3",

        },
        {
          src1: "img/U11.png",
          Date: "sep/08- 13:00",
          Location: "Marjorie P Hart",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
          LocId: "D",
          Chat: [],
          src2: 'img/U55.png',
          Num: "Juego-4",
        },
        {
          src1: "img/U66.png",
          Date: "sep/15- 9:30 a.m",
          Location: "North",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U11.png',
          Num: "Juego-5",
        },
        {
          src1: "img/U44.png",
          Date: "sep/15- 13:00",
          Location: "AJ Katzenmaier",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U44.png',
          Num: "Juego-6",

        },
        {
          src1: "img/U33.png",
          Date: "sep/22- 9:30 a.m.",
          Location: "South",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U55.png',
          Num: "Juego-7",


        },
        {
          src1: "img/U11.png",
          Date: "sep/22- 13:00",
          Location: "Howard A Yeager",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U33.png',
          Num: "Juego-8",


        },
        {
          src1: "img/U55.png",
          Date: "sep/27- 9:30 a.m.",
          Location: "Greenbay",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U11.png',
          Num: "Juego-9",


        },


        {
          src1: "img/U22.png",
          Date: "oct/06- 9:30 a.m.",
          Location: "Marjorie P Hart",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U66.png',
          Num: "Juego-10",


        },
        {
          src1: "img/U33.png",
          Date: "oct/06- 13:00",
          Location: "South",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U11.png',
          Num: "Juego-11",

        },
        {
          src1: "img/U44.png",
          Date: "oct/13- 9:30 a.m.",
          Location: "Howard A Yeager",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U55.png',
          Num: "Juego-12",

        },
        {
          src1: "img/U22.png",
          Date: "oct/13- 13:00",
          Location: "Greenbay",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
          src2: 'img/U33.png',
          Chat: [],
          Num: "Juego-13",


        },

        {
          src1: "img/U11.png",
          Date: "oct/20- 9:30 a.m.",
          Location: "North",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U66.png',
          Num: "Juego-14",


        },

        {
          src1: "img/U33.png",
          Date: "oct/20- 13:00",
          Location: "Marjorie P Hart",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U44.png',
          Num: "Juego-15",


        },

        {
          src1: "img/U55.png",
          Date: "oct/27- 9:30 a.m.",
          Location: "AJ Katzenmaier",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U11.png',
          Num: "Juego-16",
        },

        {
          src1: "img/U66.png",
          Date: "oct/27-  13:00",
          Location: "Howard A Yeager",
          Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
          Chat: [],
          src2: 'img/U33.png',
          Num: "Juego-17",


        }
      ]

    },


    methods: {
      registro: function () {
        firebase.auth().createUserWithEmailAndPassword(app.email, app.password)
          .then(function () {
            alert("¡Bienvenido!")

          })

          .catch(function (error) {
            alert(error.message);
            console.log(error);
          });
      },

      acceso: function () {
        firebase.auth().signInWithEmailAndPassword(app.email, app.password)
          .then(function () {
            alert("Genial, ya ingresaste")
            app.display("pills-schedule");

          })
          .catch(function (error) {
            alert(error.message);
            console.log(error);
          })
      },
      accesoGoogle: function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function () {
          alert("Genial, ya ingresaste")
          app.display("pills-schedule");

        })
      },

      display: function () {
        this.show = "";

      },

      foro: function (juego) {
        $("#pills-home").hide(3000);
        $("#pills-schedule").hide(3000);
        $("#pills-maps").hide(3000);
        $("#pills-teams").hide(3000);
        $("#pills-login").show("slow");
        $("#pills-foro").hide(3000);
        console.log(juego);
        app.numberGame = juego;

        app.mensajes = [];

        firebase.database().ref(app.numberGame).on('child_added', function (childSanpshot) {
          app.mensajes.push(childSanpshot.val());

        });
      },

      LogOut: function () {
        firebase.auth().signOut();
      },



      send: function () {
        var texti = {
          texto: this.mensaje,
          email: firebase.auth().currentUser.email,
        };
        firebase.database().ref(app.numberGame).push(texti);
        console.log("holaaa");
      }
    }
  })

  firebase.auth().onAuthStateChanged(function (user) {
    app.user = user;
  })