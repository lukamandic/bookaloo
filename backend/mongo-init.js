db.users.insertMany([
    { 
        "_id": ObjectId("6176f7b803c4d12d7bd6c987"),
        "firstName": "Luka",
        "lastName": "Mandić",
        "email": "lukamandic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "admin",
        "books": [
            "6176fe34b12d21e4e2c5c4df",
            "6176fe34b12d21e4e2c5c4e0"
        ]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c988"),
        "firstName": "Tin",
        "lastName": "Ujević",
        "email": "tinujevic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": []
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c989"),
        "firstName": "Miroslav",
        "lastName": "Krleža",
        "email": "miroslavkrleza@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e1"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c98a"),
        "firstName": "Ivana",
        "lastName": "Brlić-Mažuranić",
        "email": "ivanabrlicmazuranic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e2"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c98b"),
        "firstName": "Ranko",
        "lastName": "Marinković",
        "email": "rankomarinkovic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e3"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c98c"),
        "firstName": "Marko",
        "lastName": "Marulić",
        "email": "markomarulic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e4"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c98d"),
        "firstName": "Fran",
        "lastName": "Galović",
        "email": "frangalovic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e5"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c98e"),
        "firstName": "Dragutin",
        "lastName": "Domjanić",
        "email": "dragutindomjanic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e6"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c98f"),
        "firstName": "Miro",
        "lastName": "Gavran",
        "email": "mirogavran@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e7"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c990"),
        "firstName": "Pavao",
        "lastName": "Pavličić",
        "email": "pavaopavlicic@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e8"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c991"),
        "firstName": "Vjenceslav",
        "lastName": "Novak",
        "email": "vjenceslavnovak@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4e9"]
    },
    {
        "_id": ObjectId("6176f7b803c4d12d7bd6c992"),
        "firstName": "Dragutin",
        "lastName": "Tadijanović",
        "email": "dragutintadijanović@bookaloo.com",
        "password": "$2a$12$zqedkq6oJO8yxknoUVtmTOqwkG87LkdO7cz5C0kufNZmk6sY2gBpC",
        "role": "author",
        "books": ["6176fe34b12d21e4e2c5c4ea"]
    }
]);

db.books.insertMany([
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4df"),
        "name": "Skalpel kaosa",
        "year": 1900,
        "author": ObjectId("6176f7b803c4d12d7bd6c987")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e0"),
        "name": "Pjesničke misli",
        "year": 1920,
        "author": ObjectId("6176f7b803c4d12d7bd6c987")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e1"),
        "name": "Gospoda Glembajevi",
        "year": 1929,
        "author": ObjectId("6176f7b803c4d12d7bd6c989")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e2"),
        "name": "Čudnovate zgode šegrta Hlapića",
        "year": 1913,
        "author": ObjectId("6176f7b803c4d12d7bd6c98a")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e3"),
        "name": "Kiklop",
        "year": 1965,
        "author": ObjectId("6176f7b803c4d12d7bd6c98b")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e4"),
        "name": "Judita",
        "year": 1521,
        "author": ObjectId("6176f7b803c4d12d7bd6c98c")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e5"),
        "name": "Začarano ogledalo",
        "year": 1913,
        "author": ObjectId("6176f7b803c4d12d7bd6c98d")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e6"),
        "name": "Popevke",
        "year": 1920,
        "author": ObjectId("6176f7b803c4d12d7bd6c98e")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e7"),
        "name": "Pjesničke misli",
        "year": 1920,
        "author": ObjectId("6176f7b803c4d12d7bd6c98f")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e8"),
        "name": "Pjesničke misli",
        "year": 1920,
        "author": ObjectId("6176f7b803c4d12d7bd6c990")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4e9"),
        "name": "Pjesničke misli",
        "year": 1920,
        "author": ObjectId("6176f7b803c4d12d7bd6c991")
    },
    {
        "_id" : ObjectId("6176fe34b12d21e4e2c5c4ea"),
        "name": "Pjesničke misli",
        "year": 1920,
        "author": ObjectId("6176f7b803c4d12d7bd6c992")
    }
]);
