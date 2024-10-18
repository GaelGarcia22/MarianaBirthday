// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: '¿Estas lista para la sorpresa?',
        icon: 'question',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Siiiiiii',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// html elemnts 

       
<div class="four">
<div class="text-box">
    <p class="hbd-chatbox">
    Happy birthday to youu!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam amet ipsam vitae, voluptatum architecto aliquid id quo error tempora quos aperiam magni necessitatibus quas ut, possimus nesciunt nam ad.
    </p>
    <p class="fake-btn">Send</p>
</div>
</div>

.from(".four", 0.7, {
    scale: 0.2,
    opacity: 0,
})
.from(".fake-btn", 0.3, {
    scale: 0.2,
    opacity: 0,
})


.four .text-box {
    border: 3px solid #aaa;
    border-radius: 5px;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    width: 600px;
  }
  
  .text-box p {
    margin: 0;
    text-align: left;
  }
  
  .text-box span {
    visibility: hidden;
  }
  
  .text-box .fake-btn {
    background-color: rgb(21, 161, 237);
    border-radius: 3px;
    bottom: -50px;
    color: #fff;
    padding: .5rem 1rem;
    position: absolute;
    right: 5px;
  }
  