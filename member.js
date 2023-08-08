function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var projectsList = document.getElementById("projectsList");
    var contactList = document.getElementById("contactList");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    memberList.style.backgroundColor = "#1e1e1e";
    skillsList.style.backgroundColor = "#000000";
    projectsList.style.backgroundColor = "#000000";
    contactList.style.backgroundColor = "#000000";
}
