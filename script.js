function generatePlaylist() {
  var mood = document.getElementById("mood").value;
  var genre = document.getElementById("genre").value;
  var numSongs = document.getElementById("numSongs").value;
  var playlist = document.getElementById("playlist");
  var audioPlayer = document.getElementById("audioPlayer");
  playlist.innerHTML = "";

  // Mock playlist data - Replace with your actual data or API integration
  var songs = {
    "Happy": {
      "Pop": [
        {
          "name": "Happy Pop Song 1",
          "audio_url": "URL_to_audio_1"
        },
        // Add more songs
      ],
      "rock": [
        {
          "name": "Happy rock Song 1",
          "audio_url": "URL_to_audio_1"
        },
        // Add more songs
      ],"jaaz": [
        {
          "name": "Happy jaaz Song 1",
          "audio_url": "URL_to_audio_1"
        },
        // Add more songs
      ],
      // Add more genres
    },
    // Add more moods
  };

  if (songs.hasOwnProperty(mood) && songs[mood].hasOwnProperty(genre)) {
    var selectedSongs = songs[mood][genre].slice(0, numSongs);
    selectedSongs.forEach(function(song) {
      var li = document.createElement("li");
      li.textContent = song.name;

      li.addEventListener('click', function() {
        audioPlayer.src = song.audio_url;
        audioPlayer.play();
      });

      playlist.appendChild(li);
    });
  } else {
    var li = document.createElement("li");
    li.textContent = "Playlist not found for the selected mood and genre.";
    playlist.appendChild(li);
  }
}
