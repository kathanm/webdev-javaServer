(function(){
    function init() {
        findAllUsers()
            .then(renderUsers);
    }
    init()

    function findAllUsers() {
        var url = "/api/user";
        return fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    function renderUsers(users) {
        console.log(users);

        var tbody = $('tbody');
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];

            var tr = $('<tr>');
            var td = $('<td>');
            td.append(user.username);
            tr.append(td);

            td = $('<td>');
            td.append('********');
            tr.append(td);

            td = $('<td>');
            td.append(user.firstName);
            tr.append(td);

            td = $('<td>');
            td.append(user.lastName);
            tr.append(td);

            td = $('<td>');
            td.append('hello@world.com');
            tr.append(td);

            td = $('<td>');
            td.append('Student');
            tr.append(td);

            var deleteBtn = $('<button>DELETE</button>');
            td = $('<td>');
            td.append(deleteBtn);
            tr.append(td);

            tr.appendTo(tbody);
        }
    }
})();