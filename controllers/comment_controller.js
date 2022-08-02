const Comment= require('../models/comment');
const Post =require('../models/post');

module.exports.create =function(req,res){
    Post.findById(req.body.post,function(err,post){
        if(err){console.log("error in finding post of the comment"); return;}
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            },function(err,comment){
                if(err){
                    console.log("error in creating comment");
                }
                post.comments.push(comment);
                post.save();
                return res.redirect('/');
            });
        }
    });
}
module.exports.destroy =function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(err){console.log("error in finding comment while deleting");return;}
        if(comment.user == req.user.id){
            let postId= comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId,{$pull :{comments :req.param.id}}, function(err,post){
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }
    });
}