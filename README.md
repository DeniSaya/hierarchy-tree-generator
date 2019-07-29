# hierarchy-tree-generator
hierarchy-tree-generator is a typescript library that generates a graphic based on a json.

## Installation

```bash
npm i hierarchy-tree-generator
```
## Usage

```python
import hierarchyTreeGenerator from 'hierarchy-tree-generator';

hierarchyTreeGenerator(children)
```

# graphic example
```
Warehouse Manager
├─ Warehouse Officer
│ ├─ Cleaner
│ └─ Day Laborers
└─ Warehouse Information Officer
```

# data structure example
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
