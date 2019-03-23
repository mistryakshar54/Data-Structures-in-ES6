// import { BinTreeNode } from "./BinTreeNode";

class BinTreeNode
{
    constructor( data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor( rootNodeData )
    {
        this.root = null;
    }
    
    insertNewNode(  rootNode , dataToInsert )
    {
        if( rootNode == null )
        {
            return new BinTreeNode( dataToInsert );
        }

        if( dataToInsert < rootNode.data)
        {
            rootNode.left = this.insertNewNode( rootNode.left , dataToInsert );
        }
        else
        {
            rootNode.right = this.insertNewNode( rootNode.right , dataToInsert );
        }
        return rootNode;
    }

    searchNode ( rootNode , nodeToSearch )
    {
        if( rootNode == null) { return false; }
        if( rootNode.data == nodeToSearch) { return true; }
        if( rootNode.data > nodeToSearch ) { return this.searchNode( rootNode.left , nodeToSearch ); }
        else { return this.searchNode( rootNode.right , nodeToSearch ); }
    }

    inorderTraversal( rootNode )
    {
        if( rootNode != null )
        {
            this.inorderTraversal( rootNode.left );
            console.log( rootNode.data );
            this.inorderTraversal( rootNode.right );
        }
    }
}

var binTree = new BinarySearchTree();
binTree.root = binTree.insertNewNode(null , 60);
binTree.insertNewNode( binTree.root , 40 );
binTree.insertNewNode( binTree.root , 70 );
binTree.insertNewNode( binTree.root , 33 );
binTree.insertNewNode( binTree.root , 89 );
console.log("Inorder Traversal");
binTree.inorderTraversal( binTree.root );
console.log( "55 Found =>" , binTree.searchNode( binTree.root , 55 ));
console.log( "89 Found =>" , binTree.searchNode( binTree.root , 89 ));