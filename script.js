const recitations = [
    {
      title: 'Hamza Ahmed',
      image: 'masjid.jpg',
      link: 'video-43174.mp4'
    },
    {
      title: 'Mustafa Ausaf',
      image: 'najm.jpg',
      link: 'video 2.mp4'
    },
    {
      title: 'Sami',
      image: 'mecca.jpg',
      link: 'video 3.mp4'
    },
    
  ];
  
  
  function generateRecitationCard(recitation) {
    const card = document.createElement('div');
    card.classList.add('recitationCard');
  
    const image = document.createElement('img');
    image.src = recitation.image;
    card.appendChild(image);
  
    const title = document.createElement('h3');
    title.textContent = recitation.title;
    card.appendChild(title);
  
    const audioLink = document.createElement('a');
    audioLink.href = recitation.link;
    audioLink.textContent = 'Listen';
    card.appendChild(audioLink);
  
    return card;
  }
  
  
  function displayRecitations(recitations) {
    const recitationList = document.getElementById('recitationList');
  
    recitations.forEach((recitation) => {
      const card = generateRecitationCard(recitation);
      recitationList.appendChild(card);
    });
  }
  
  
  window.addEventListener('load', () => {
    displayRecitations(recitations);
  });
  window.addEventListener('DOMContentLoaded', function() {
  
    var apiUrl = 'https://api.aladhan.com/v1/timingsByCity';
  
   
    function fetchPrayerTimings() {
     
      var currentDate = new Date();
      var currentDay = currentDate.getDate();
      var currentMonth = currentDate.getMonth() + 1;
  
      
      var params = {
        city: 'Glen Ellyn', 
        country: '60137', 
        method: '8', 
        school: '0', 
        month: currentMonth,
        year: currentDate.getFullYear(),
      };
  
      
      var requestUrl = apiUrl + '?' + new URLSearchParams(params);
  
      
      fetch(requestUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          
          var prayerTimings = data.data.timings;
  
          
          updatePrayerTimings(prayerTimings);
        })
        .catch(function(error) {
          console.log('Error fetching prayer timings:', error);
        });
    }
  
    
    function updatePrayerTimings(prayerTimings) {
      
      var prayerTimingsMap = {
        Fajr: 'fajr-time',
        Dhuhr: 'dhuhr-time',
        Asr: 'asr-time',
        Maghrib: 'maghrib-time',
        Isha: 'isha-time'
      };
  
      
      for (var prayerName in prayerTimings) {
        if (prayerName in prayerTimingsMap) {
          var prayerTimeElement = document.getElementById(prayerTimingsMap[prayerName]);
          var prayerTime = convertTo12HourFormat(prayerTimings[prayerName]);
          prayerTimeElement.textContent = prayerTime;
        }
      }
    }
  

    function convertTo12HourFormat(time) {
      var timeParts = time.split(':');
      var hour = parseInt(timeParts[0]);
      var minute = timeParts[1];
  
      var meridiem = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12 || 12;
  
      return hour + ':' + minute + ' ' + meridiem;
    }
    fetchPrayerTimings();
  });
    function toggleDescription(founderNumber) {
      const description = document.querySelector(`.founder:nth-of-type(${founderNumber}) .description`);
      const expandIcon = document.querySelector(`.founder:nth-of-type(${founderNumber}) .expand-icon`);
      description.classList.toggle('show');
      expandIcon.classList.toggle('expanded');
    }
    var donationButton = document.getElementById('donation-button');
    donationButton.addEventListener('click', function() {
      window.location.href = 'https://give.unrefugees.org/200514core_zakat_c_6051/?SF_onetime=7011K0000023gZLQAY&SF_monthly=7011K0000023gZQQAY&gad=1&gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF-2q9Jvz-5RzkKj2BeRTAgtSRO-K4yROGymMyXzcKaPcQGn_n-jgXwaAkRgEALw_wcB&gclsrc=aw.ds';
    });

    fetch('https://api.al-hadith.islamhouse.com/v1/hadiths/random')
  .then(response => response.json())
  .then(data => {
    // Process and display the Hadith data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
