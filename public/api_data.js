define({ "api": [
  {
    "type": "get",
    "url": "/student",
    "title": "",
    "name": "Get_All_Results",
    "group": "Student",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "Results",
            "description": "<p>All Results.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n {\n     \"subjectOne\": 54,\n     \"subjectTwo\": 78,\n     \"subjectThree\": 87,\n     \"_id\": \"60034f96fdd5e2e51b53011a\",\n     \"name\": \"musthu\",\n     \"reg_No\": 54,\n     \"total\": 534,\n     \"__v\": 0\n },\n {\n     \"subjectOne\": 47,\n     \"subjectTwo\": 95,\n     \"subjectThree\": 46,\n     \"_id\": \"6003537c17aadfeba3cc8f05\",\n     \"name\": \"faiha\",\n     \"reg_No\": 24,\n     \"total\": 422,\n     \"__v\": 0\n }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/students.js",
    "groupTitle": "Student"
  },
  {
    "type": "delete",
    "url": "/tutor/:id",
    "title": "",
    "name": "Delete_Student",
    "group": "Tutor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id Of Student</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ITEM WITH THE {id} HAS BEEN DELETED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n \"message\": \"ITEM WITH THE 6003546c17aadfeba3cc8f06 HAS BEEN DELETED\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tutor.js",
    "groupTitle": "Tutor"
  },
  {
    "type": "patch",
    "url": "/tutor/:id",
    "title": "",
    "name": "Edit_Student",
    "group": "Tutor",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JwtToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id Of Student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name Of Student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reg_No",
            "description": "<p>Register Number Of Student.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subOne",
            "description": "<p>Mark Of Subject One.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subTwo",
            "description": "<p>Mark Of Subject Two.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subThree",
            "description": "<p>Mark Of Subject Three.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "total",
            "description": "<p>Total Marks.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>STUDENT UPDATED SUCCESSFULLY.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "updatedList",
            "description": "<p>Updated Details Of  Student.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n \"message\": \"STUDENT UPDATED SUCCESSFULLY\",\n \"updatedList\": {\n     \"subjectOne\": 54,\n     \"subjectTwo\": 78,\n     \"subjectThree\": 87,\n     \"_id\": \"6003546c17aadfeba3cc8f06\",\n     \"name\": \"fsg\",\n     \"reg_No\": null,\n     \"total\": 534,\n     \"__v\": 0\n     }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tutor.js",
    "groupTitle": "Tutor"
  },
  {
    "type": "post",
    "url": "/tutor/login",
    "title": "",
    "name": "TutorLogin",
    "group": "Tutor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email of tutor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>password of tutor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>TUTOR LOGGED SUCCESSFULLY.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"message\": \"TUTOR LOGGED SUCCESSFULLY\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1dG9yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjEwODI4MjY2fQ.7fpTmXvPvf1wZbYwVw0ybZQfpSTbq6LdHcg9leCQ48g\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginFailed",
            "description": "<p>INCORRECT USERNAME OR PASSWORD.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"INCORRECT USERNAME OR PASSWORD\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tutor.js",
    "groupTitle": "Tutor"
  },
  {
    "type": "post",
    "url": "/tutor/addlist",
    "title": "",
    "name": "addStudent",
    "group": "Tutor",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JwtToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name Of Student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reg_No",
            "description": "<p>Register Number Of Student.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subOne",
            "description": "<p>Mark Of Subject One.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subTwo",
            "description": "<p>Mark Of Subject Two.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subThree",
            "description": "<p>Mark Of Subject Three.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "total",
            "description": "<p>Total Marks.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "newList",
            "description": "<p>Added Details Of New Students.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 OK\n{\n    \"newList\": {\n        \"subjectOne\": 54,\n        \"subjectTwo\": 78,\n        \"subjectThree\": 87,\n        \"_id\": \"60034f96fdd5e2e51b53011a\",\n        \"name\": \"farhan\",\n        \"reg_No\": 54,\n        \"total\": 534,\n        \"__v\": 0\n                }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SOMETHING",
            "description": "<p>WENT WRONG INVALID NAME.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"INVALID NAME\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tutor.js",
    "groupTitle": "Tutor"
  }
] });
