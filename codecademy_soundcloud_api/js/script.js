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

