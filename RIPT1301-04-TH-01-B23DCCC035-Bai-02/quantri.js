var students = [];

// Hàm hiển thị danh sách sinh viên
function displayStudents() {
    var tableBody = document.getElementById('studentList');
    tableBody.innerHTML = '';

    students.forEach(function(student, index) {
        var row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${student.class}</td>
            <td>
                <button onclick="editStudent(${index})">Sửa</button>
                <button onclick="deleteStudent(${index})">Xóa</button>
            </td>
        `;
    });
}

// Hàm thêm sinh viên mới
function addStudent(name, age, address, phone, email, classRoom) {
    var student = {
        name: name,
        age: age,
        address: address,
        phone: phone,
        email: email,
        class: classRoom
    };
    students.push(student);
    displayStudents();
}

// Hàm sửa thông
// Sự kiện click nút "Thêm sinh viên"
document.getElementById('addStudentBtn').addEventListener('click', function() {
    document.getElementById('modalTitle').innerText = 'Thêm sinh viên';
    document.getElementById('studentForm').reset(); // Đặt lại form
    document.getElementById('studentModal').style.display = 'block';
});

// Sự kiện submit form sinh viên
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

    var studentId = document.getElementById('studentId').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var classRoom = document.getElementById('class').value;

    if (studentId === '') {
        // Nếu không có studentId thì thêm sinh viên mới
        addStudent(name, age, address, phone, email, classRoom);
    } else {
        // Nếu có studentId thì cập nhật thông tin sinh viên
        updateStudent(studentId, name, age, address, phone, email, classRoom);
    }

    document.getElementById('studentModal').style.display = 'none'; // Ẩn modal
});

// Sự kiện click nút "Đóng" modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('studentModal').style.display = 'none';
});

// Sự kiện click nút "Sửa"
function editStudent(index) {
    var student = students[index];
    document.getElementById('studentId').value = index;
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('address').value = student.address;
}