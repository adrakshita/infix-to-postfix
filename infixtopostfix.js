stack=[];
Top=-1;
copy_stack=[];
show="";
postfix="";
display="";
        function push(stack,item){
            stack[++Top]=item;
        }
        function pop(stack){
            let idklol= stack[Top--];
            stack.pop()
            return idklol
        }
       
        function preced(symbol){
            switch(symbol){
                case '+':
                case '-':return 1;
                case '*':
                case '/':return 2;
                case '^':return 3;
            }
        }
        
        function InfixtoPostfix(){
            let i,symbol,show="",arr;
            let temp=0,count=0;
            infix=document.getElementById("input").value;
            for(i=0;i<infix.length;i++){
                
                symbol=infix[i];
                let ascii=symbol.charCodeAt(0)
                if((ascii>=65&&ascii<=90)||(ascii>=97&&ascii<=122))
                    postfix+=symbol;
                else{
                    switch(symbol){
                        case '(':push(stack,symbol);
                                break;
                        case ')':temp=pop(stack);
                                while(temp!='('){
                                    postfix+=temp;
                                    temp=pop(stack);
                                }
                                break;
                        case '+':
                        case '-':
                        case '*':
                        case '/':
                        case '^':if(Top==-1||stack[Top]=='(')
                                    push(stack,symbol);
                                else{
                                    while(preced(stack[Top])>=preced(symbol)&&Top!=-1&&stack[Top]!='(')
                                        postfix+=pop(stack);
                                    push(stack,symbol);
                                break;
                    }
                }
            }
                copy_stack[i]={
                    "stack":[...stack],"postfix":postfix
                };
        }
            while(Top!=-1){
                postfix+=pop(stack);
                copy_stack[i]={
                    "stack":[...stack],"postfix":postfix
                };
                i++;
            }
            postfix+='\0';
            
            console.log(copy_stack)
        
    }
        var z=0;
        function next(){
                show=copy_stack[z]['postfix'];
                display=copy_stack[z]['stack'].join("");
                document.getElementById("output").innerHTML=show;
                document.getElementById("stack").innerHTML=display;
                z++;
        }
         function back(){
                z--;
                show=copy_stack[z]['postfix'];
                display=copy_stack[z]['stack'].join("");
                document.getElementById("output").innerHTML=show;
                document.getElementById("stack").innerHTML=display;
                
        }
                