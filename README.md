# hierarchy-tree-generator
- A typescript library that generates a tree based on a json

# setup
import hierarchyTreeGenerator from 'hierarchy-tree-generator';

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