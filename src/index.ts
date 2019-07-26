const getIndent = (lvl: number, index: any, last: any) => {
  if (lvl === 1 && index !== last) {
    return '&#8866;';
  } else if (lvl > 1 && index !== last) {
    return `&#124;${"  ".repeat(lvl)}&#8866;`;
  } else if (lvl > 1 && index === last) {
    return `&#124;${"  ".repeat(lvl)}&#8735;`;
  } else if (lvl === 1 && index === last) {
    return '&#8735;';
  }
}

let lvl = 0;

export default function generateTree(children: any, subtree: boolean = false) {
  children.forEach((child: any, index: any, self: any) => {
    const name = document.createElement("div");

    if (subtree && lvl) {
      name.innerHTML = getIndent(lvl, index, self.length - 1) + child.name;
    } else {
      name.innerHTML = child.name;
    }

    document.body.appendChild(name);

    if (Array.isArray(child.subtree) && child.subtree) {
      if (child.subtree.length > 0) {
        lvl += 1;
        generateTree(child.subtree, true);

        lvl -= 1;
      }
    } else {
      generateTree(child);
    }
  });
}
