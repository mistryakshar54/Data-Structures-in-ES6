// import { BinTreeNode } from './BinTreeNode';

class BinTreeNode
{
    constructor( data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree
{

    constructor()
    {
        this.root = null;
    }

    insertNewNode( data )
    {
        var newNode = new BinTreeNode(data);
        return newNode;
    }

    inorderTraversal( root )
    {
        if( root != null )
        {
            this.inorderTraversal( root.left );
            console.log( root.data );
            this.inorderTraversal( root.right );
        }
    }

    preorderTraversal( root )
    {
        if( root != null )
        {
            console.log( root.data );
            this.preorderTraversal( root.left );
            this.preorderTraversal( root.right );
        }
    }



    postorderTraversal( root )
    {
        if( root != null )
        {
            this.postorderTraversal( root.left );
            this.postorderTraversal( root.right );
            console.log( root.data );
            
        }
    }
}

var binTree = new BinaryTree();
binTree.root = binTree.insertNewNode('A');
binTree.root.left = binTree.insertNewNode('B');
binTree.root.right = binTree.insertNewNode('C');
console.log("Inorder Traversal");
binTree.inorderTraversal( binTree.root );
console.log("Preorder Traversal");
binTree.preorderTraversal( binTree.root );
console.log("Postorder Traversal");
binTree.postorderTraversal( binTree.root );