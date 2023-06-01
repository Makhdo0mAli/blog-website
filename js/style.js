$(document).ready(function(){
    $('.filter-item').click(function(){
        let value = $(this).attr('data-filter')
        if(value=='all'){
            $('.post-box').show('1000')
        }
        else{
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box.' + value).show('1000');
            
           
        }
    })
    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter')
    })
});

let header = document.querySelector('header')
window.addEventListener('scroll' , ()=>{
    header.classList.toggle('shadow' , window.scrollY > 0)
})


const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('post');
if (postId == 1) {
    document.getElementById('post-title').innerText = 'Post 1';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-1.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 2) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-2.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 3) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-3.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 4) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-4.webp" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 5) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-5.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 6) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-3.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 7) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-7.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 8) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-8.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else if(postId == 9) {
    document.getElementById('post-title').innerText = '';
    document.getElementById('post-body').innerHTML = `
        <section class="post-header">
            <div class="post-container header-content">
                <h1 class="header-title">How to create UX Design With Adobe XD</h1>
                <img src="images/img-9.jpg" class="header-img" alt="">
            </div>
        </section>

        <section class="post-container post-content">
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <h2 class="sub-heading">Create Best UX Design</h2>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
            <p class="post-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam voluptatum praesentium, error veniam architecto quos sequi, suscipit eveniet minima cum modi. Blanditiis ad amet quo eos at exercitationem, recusandae neque laudantium fugit asperiores molestiae. Minima nesciunt sunt laboriosam, assumenda sit repudiandae dignissimos quaerat consequatur!</p>
        </section>`;
}
else {
    document.getElementById('post-title').innerText = 'Post Not Found';
    document.getElementById('post-body').innerText = 'The requested post was not found.';
}