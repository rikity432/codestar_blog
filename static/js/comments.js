const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");
const commentText = document.getElementById("id_body");

const editButtons = document.getElementsByClassName("btn-edit");

const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        const commentId = button.getAttribute("comment_id");
        const commentContent = document.getElementById(`comment${commentId}`).innerText;

        commentText.value = commentContent.trim();
        submitButton.innerText = "Update";
        commentForm.setAttribute("action", `edit_comment/${commentId}`);
    });
}

for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
        const commentId = button.getAttribute("comment_id");
        deleteConfirm.setAttribute("href", `delete_comment/${commentId}`);
        deleteModal.show();
    });
}
