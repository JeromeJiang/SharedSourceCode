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

//实现Link Business点击后,背景颜色的变化
function LinkLinkBusinessSelected(clickElement) {
    var selectedNode = document.getElementsByClassName("linkTreeLinkBusinessSelected");
    if (selectedNode.length >= 1) {
        selectedNode[0].className = "linkTreeLinkBusiness";
    }

    var classStr = clickElement.getAttribute("class");
    classStr = classStr + " linkTreeLinkBusinessSelected";
    clickElement.className = classStr;
}

//实现Link点击后,背景颜色的变化
function LinkLinkSelected(clickElement) {
    var selectedNode = document.getElementsByClassName("linkTreeLinkSelected");
    if (selectedNode.length >= 1) {
        selectedNode[0].className = "linkTreeLink";
    }

    var classStr = clickElement.getAttribute("class");
    classStr = classStr + " linkTreeLinkSelected";
    clickElement.className = classStr;
}