(function() {
    var $username, $firstName, $lastName;

    function init() {

        $username = $("#username");
        $firstName = $("#firstName");
        $lastName = $("#lastName");

        findUserById(7)
            .then(renderUser)
    }
    init();
    
    function renderUser(user) {
        $username.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }

    function findUserById(userId) {
        return fetch('/api/user/' + userId ).then(function(response) {
            return response.json();
        });
    }
})();