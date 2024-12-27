{/* <script src="https://cdn.jsdelivr.net/gh/<your-username>/web/js/FtExamblog.js"></script> */ }

function setFooter() {
    document.querySelector('.copyright').innerHTML = `
      <div class="" style="margin-top: 60px; margin-bottom: 30px;">
        <div style="display: flex; gap: 40px; justify-content: center; margin-bottom: 30px;">
        <a href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook fa-2x"></i>
        </a>
        <a href="https://twitter.com/" target="_blank">
            <i class="fa-brands fa-twitter fa-2x"></i>
        </a>
        <a href="https://instagram.com/" target="_blank">
            <i class="fa-brands fa-instagram fa-2x"></i>
        </a>
        </div>
        <center style="font-size:18px; font-weight: bold;">

        Kritbovorn Taweeyossak &copy; 2025
        <a style="color:gray;text-decoration:none" href="#" target="_blank">Contact</a>
        </center>
    </div>
    `;
}