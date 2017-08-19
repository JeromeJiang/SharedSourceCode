//实现Navigation点击后,背景颜色的变化
function NavigationSelected(clickElement) {
    var selectedNode = document.getElementsByClassName("navigationLinkSelected");
    if (selectedNode.length >= 1) {
        selectedNode[0].className = "navigationLink";
    }

    var classStr = clickElement.getAttribute("class");
    classStr = classStr + " navigationLinkSelected";
    clickElement.className = classStr;
}

//实现Navigation点击后,背景颜色的变化
function TreeLinkSelected(clickElement) {
    var selectedNode = document.getElementsByClassName("treeLinkSelected");
    if (selectedNode.length >= 1) {
        selectedNode[0].className = "treeLink";
    }

    var classStr = clickElement.getAttribute("class");
    classStr = classStr + " treeLinkSelected";
    clickElement.className = classStr;
}