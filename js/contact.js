doc('.submit').addEventListener('click', function(e){

    e.preventDefault();
    var name = doc('.name'),
        lastName = doc('.last-name'),
        email = doc('.email'),
        content = doc('.content'),
        mainError = doc('.main-error'),
        validName = name.validate('name', name.value),
        validLastName = lastName.validate( 'lastName', lastName.value),
        validEmail = email.validate('email', email.value),
        validContent = content.validate('content', content.value);

    name.nextElement().innerHTML = validName ? '' : 'name is not valid!';
    lastName.nextElement().innerHTML = validLastName ? '' : 'last name is not valid!';
    email.nextElement().innerHTML = validEmail ? '' : 'email is not valid!';
    content.nextElement().innerHTML = validContent ? '' : 'content is not valid!';

    if( validName && validLastName && validEmail && validContent ){

        mainError.innerHTML = 'The data you entered is correct!';
        return;

    }
    
    mainError.innerHTML = '';

});