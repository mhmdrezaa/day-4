/*
let namaSiswa = ["reza", "udin", "ucok"];
console.log(namaSiswa);
namaSiswa.push("basuki", "jokowi");
console.log(namaSiswa);

let reverseData = namaSiswa.reverse();
console.log(reverseData);

let sortData = namaSiswa.sort();
console.log(sortData);

let dataReza = {
  nama: "Mohamad Reza",
  umur: 19,
  alamat: "tangerang",
};
console.log(dataReza.alamat);

let dataSiswa = [
  {
    nama: "Mohamad Reza",
    umur: 19,
    alamat: "tangerang",
  },
];

let number = [20, 20, 20];
function dataNumber(total, num) {
  return total + num;
}
let result = number.reduce(dataNumber);
console.log(result);
///
*/

/*
let dataTeman = [];

function tambahTeman() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let siswa = {
    title: title,
    description: description,
  };

  dataTeman.push(siswa);
  console.log(dataTeman);
}
*/

let blogs = [];

function addBlog(event) {
  event.preventDefault(); // mencegah terjadinya event bawaan

  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("file-upload").files;

  image = URL.createObjectURL(image[0]); // Untuk menampilkan gambar

  let blog = {
    title: title,
    description: description,
    image: image,
  };

  blogs.push(blog);
  console.log(blogs);

  renderBlog();
}

// melakukan perulangan pada objek.
function renderBlog() {
  document.getElementById("contents").innerHTML = "";
  for (let dataBlog = 0; dataBlog < blogs.length; dataBlog++) {
    document.getElementById("contents").innerHTML += `
            <div class="project-card">
            <div class="card-image">
              <img
                src=${blogs[dataBlog].image}
                alt="salvador"
              />
            </div>
            <h4 class="project-name">
            ${blogs[dataBlog].title}
            </h4>
            <p class="durasi">Duration: 7 Month</p>
            <p class="description">
            ${blogs[dataBlog].description}
            </p>
            <div class="icon">
            <i class='bx bxl-vuejs true' ></i>
            <i class='bx bxl-react true' ></i>
            <i class='bx bxl-nodejs true' ></i>
            <i class='bx bxl-javascript true' ></i>
            </div>
    
            <div class="div-button-project">
              <button class="btn-aksi">edit</button>
              <button class="btn-aksi">delete</button>
            </div>
         </div>
            `;
  }
}
