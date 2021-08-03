
// Need to make an on click function that responds to current object
// $("tr").on("click", function(){
//     alert(this);
//     console.log(this);
// })

// Below will be the code to pull from firebase when a new child is added
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyDlcbijm1mEcCm4lL2Sl2Wu8VL00NjWhdA",
        authDomain: "incredible-applications.firebaseapp.com",
        projectId: "incredible-applications",
        storageBucket: "incredible-applications.appspot.com",
        messagingSenderId: "811804729674",
        appId: "1:811804729674:web:7ded90ff95e34888ed21b3"
        };
          
       // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    database.ref("/applicants").on("child_added", function(snap){
      console.log(snap.val());
      // $("#applicantsPanel").append("hello");

      // Store all remote values in local variables
      let snapFirstName = snap.val().firstName;
      let snapLastName = snap.val().lastName;
      let snapAddress = snap.val().address;
      let snapCity = snap.val().city;
      let snapZip = snap.val().zip;
      let snapEmail = snap.val().email;
      let snapPhone = snap.val().phone;
      let snapCalledApplicant;
      if (snap.val().calledApplicant == true){
        snapCalledApplicant = "Yes"
      } 
      else {
        snapCalledApplicant = "No"
      }
      let snapDocuments = "Waiting";
      


    //   ---------------------------------------------------


      

    //   $("#applicantsPanel").append(`
    //     <tr id="green">
    //       <td>${snapFirstName}</td>
    //       <td>${snapLastName}</td>
          
    //       <td>${snapAddress}</td>
    //       <td>${snapCity}</td>
    //       <td>${snapZip}</td>
    //       <td>${snapPhone}</td>
    //       <td>${snapEmail}</td>
          
    //       <td>${snapCalledApplicant}</td>
    //       <td>${snapDocuments}</td>
    //       <td>${snapDocuments}</td>
    //       <td>${snapDocuments}</td>
    //       <td>${snapDocuments}</td>
    //       <td>${snapDocuments}</td>
    //       <td>${snapDocuments}</td>

    //     </tr>
    //   `)
      console.log(snapLastName + " " +  snapFirstName)

    //   ---------------------------------------------------
      
    //   $(".fill").append(`
    //   <div class="entries">
    //   <div class="entry" id="name">
    //     hello
    //   </div>
    //   <div class="entry" id="${snapFirstName}">
    //     fdsa
    //   </div>
    //   <div class="entry" id="city">
    //     fdsa
    //   </div>
    // </div>
    //   `)

    })

    // $(this).click(function(){
    //     console.log(document.getElementById(this));
    // })

    $("#name").click(function(){
        console.log(this.value);
    })

    if($("#entrySelector").value == 'VM'){
        $("#entrySelector").css("background-color", 'red');
    }

    // Create an onchange listener
    document.getElementById("calledSelector").onchange = changeListener;

    function changeListener(){
        var value = this.value
        console.log(value);

        // From here, we will reassign the values in the database
        // Also reassign the colors
        if(this.value == 'Yes'){
            $(this).css('background-color', 'green');
            $(this).css('color', 'white');
        }
        if(this.value == 'VM'){
            $(this).css('background-color', 'skyblue');
            $(this).css('color', 'black');
        }
        if(this.value == 'No'){
            $(this).css('background-color', 'darkgrey');
            $(this).css('color', 'white');
        }
        

    }

    // Just a test to see if jquery is working correctly

    $("#name").click(function(){
        console.log(this);
    })

    