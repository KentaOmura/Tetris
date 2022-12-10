
function htmlStrToElement(htmlStr, name, value){
    const dummyDiv = document.createElement("div");
    if(name!=undefined && value!=undefined){
        dummyDiv.setAttribute(name, value);
    }
    dummyDiv.innerHTML = htmlStr;
    return dummyDiv;
}
//テトリスの定義配列をhtml文に変換する
function blockToHtml(target)
{
    htmlStr = '';
    for(elements of target){
        for(element of elements){
            if(0===element){
                htmlStr+='　'
            }else{
                htmlStr+='■'
            }
        }
        htmlStr+='<br>'
    }

    return htmlStr;
}

//テトリミノとステージを結合する
function tetriminoBondStage(stage, tetrimino, x, y)
{
    result =[]
    index_y = 0;
    index_x = 0;
    for(row of tetrimino){
        for(e of row){
            if(stage[y+index_y][x+index_x]!=0){
                continue; //ステージそのものにはマージしない。
            }
            stage[y+index_y][x+index_x] = e ? 1 : 0;
            index_x++;
        }
        index_y++;
        index_x = 0;
    }
}

function createStage()
{
    stage = Stage.map;
    tetrimino = new Tetrmino(I_Tetrimino);
    tetriminoBondStage(stage, tetrimino.block, 1,3);
    const targetNewElement = htmlStrToElement(blockToHtml(stage), 'class', 'stage');
    document.body.prepend(targetNewElement);
}
createStage();
