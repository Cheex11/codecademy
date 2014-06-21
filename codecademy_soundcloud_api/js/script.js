SC.initialize({
    client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'indie' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});

// USERNAME EXERCISE
// $(document).ready(function() {
//   $('a.connect').click(function(e) {
//     e.preventDefault();
//     SC.connect(function() {
//       Sc.get('/me', function(me) {
//         #('#username').html(me.username);
//       })
//     })
//   });
// });

// TRACK TITLE EXERCISE
// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// $(document).ready(function() {
//     SC.get('/tracks/293', function(track) {
//       $('#player').html(track.title);
//     })
// });



// Show SC player exercise
// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// $(document).ready(function() {
//     SC.get('/tracks/293', function(track) {
//       SC.oEmbed(track.permalink_url, document.getElementById('player'));
//     })
// });


// Start STOP exercise
// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// $(document).ready(function() {
// SC.stream('/tracks/293', function(sound) {
//   $('#start').click(function(e) {
//     e.preventDefault();
//     sound.start();
//   });
//   $('#stop').click(function(e) {
//     e.preventDefault();
//     sound.stop();
//   });
// });

// Record your own exercise
// In the click handler, we want to update the timer to 0 and start recording. Add a call to updateTimer(0). Next, call the SC.record method, passing it an object literal with a progress key. The value will be an anonymous function that will accept a parameter called ms. In the body of the function, call updateTimer(ms).

// $(document).ready(function() {
//   $('#startRecording a').click(function(e) {
//     $('#startRecording').hide();
//     $('#stopRecording').show();
//     e.preventDefault();
//     SC.record({
//       progress: function(ms, avgPeak) {
//         updateTimer(ms);
//       }
//     });
//   });

// Now created a click handler for the #stopRecording a element. It should call SC.recordStop. Add code to show the #playBack and #upload elements and hide the #stopRecording element.

//   $('#stopRecording a').click(function(e) {
//     e.preventDefault();
//     $('#stopRecording').hide();
//     $('#playBack').show();
//     $('#upload').show();
//     SC.recordStop();
//   });
// });

// Upload your own recording
// SC.initialize({
//   client_id: '340f063c670272fac27cfa67bffcafc4',
//   redirect_uri: 'http://external.codecademy.com/soundcloud.html'
// });

// $(document).ready(function() {
//   $('#startRecording a').click(function(e) {
//     $('#startRecording').hide();
//     $('#stopRecording').show();
//     e.preventDefault();
//     SC.record({
//       progress: function(ms, avgPeak) {
//         updateTimer(ms);
//       }
//     });
//   });

//   $('#stopRecording a').click(function(e) {
//     e.preventDefault();
//     $('#stopRecording').hide();
//     $('#playBack').show();
//     $('#upload').show();
//     SC.recordStop();
//   });

//   $('#upload a').click(function(e) {
//     e.preventDefault();
//     SC.connect({
//       connected: function() {
//         SC.recordUpload({
//           track: {
//               title: "My Codecademy Recording",
//               sharing: 'private'
//           }
//         })
//       }
//     })
//   })
// });

// // Helper methods for our UI.

// function updateTimer(ms) {
//   // update the timer text. Used when we're recording
//   $('.status').text(SC.Helper.millisecondsToHMS(ms));
// }



//Exercise to read comments from a track.   (13/15)
// Instructions
// On line 6, add a call to SC.get. The first parameter should be the string /tracks/293/comments. The second parameter should be a callback function that accepts a single argument, called comments.
// In the callback function, write some code that iterates over the comments (using the jQuery function $.each for example). Add each comment to the <ul></ul> element defined in index.html.

// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// $(document).ready(function() {
//   SC.get('/tracks/293/comments', function(comments))
// });


// $(document).ready(function() {
//   SC.get('/tracks/293/comments', function(comments) {
//     $.each(comments, function(i, comment) {
//       $('#comments').append(
//         $('<li></li>').html(comment.body)
//       );
//     });
//   });
// });


// Exercise 14  (read comments)  (UNKNONW AS TO IF THIS ACTUALLY WORKS)
// On line 8, add a callback function with the key ontimedcomments that accepts one argument, comment. This is the function that will be called whenever there is a timed comment on the track being played. Add a single line of code to the function that sets the contents of the #comment element to comment[0].body.

// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// $(document).ready(function() {
//   SC.stream('/tracks/293', {
//     autoPlay: false,
//     ontimedcomments: function(comment) {
//       $(#comment[0].body).append(comment);
//     }
//   });
// });

// Exercise 15 (add comments POST request)
// SC.initialize({
//   client_id: '340f063c670272fac27cfa67bffcafc4',
//   redirect_uri: 'http://external.codecademy.com/soundcloud.html'
// });

// $(document).ready(function() {
//     SC.stream('/tracks/70355723', {
//         autoPlay: true
//     }, function(sound) {
//         window.sound = sound;
//     });

//     $('#comment_form').submit(function(e) {
//         e.preventDefault();
//         SC.connect(function() {
//             SC.post('/tracks/70355723/comments', {
//                 comment: {
//                     body: $('#comment_body').val(),
//                     timestamp: window.sound.position
//                 }
//             }, function(comment) {
//                 $('#status').val('Your comment was posted!');
//                 $('#comment_body').val('');
//             });
//         });
//     });
// });
