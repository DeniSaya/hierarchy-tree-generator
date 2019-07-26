# hierarchy-tree-generator
- typescript library

# graphic
```
Warehouse Manager
├── Warehouse Officer
│   ├── Cleaner
│   └── Day Laborers
└── Warehouse Information Officer
```

# data structure
```
[{
  "name": "Warehouse Manager",
  "subtree": [{
    "name": "Warehouse Officer",
    "subtree": [{
      "name": "Cleaner",
      "subtree": []
    }, {
      "name": "Day Laborers",
      "subtree": []
    }]
  }, {
    "name": "Warehouse Information Officer",
    "subtree": []
  }]
}]
```