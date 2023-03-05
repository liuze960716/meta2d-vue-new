export function downloadIamge(imgsrc, name, size) {
  //下载图片地址和图片名
  let image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    let canvas = document.createElement("canvas");
    canvas.width = size ? size : image.width;
    canvas.height = size ? size : image.height;
    let context = canvas.getContext("2d");
    if(size) image.width = image.height = size;
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据'
    let a = document.createElement("a"); // 生成一个a元素
    let event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }); // 创建一个单击事件
    a.download = name || "photo"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgsrc + "?";
}

export function downloadVideo(src, name) {
  fetch(src + "?")
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name + ".mp4";
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
}

export function downloadFile(src, name) {
  fetch(src + "?")
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name;
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
}

// 导出二进制文件的表格
export function downLoadBinaryFile(file,name){
  const blob = new Blob([file], {
    type: "application/x-xls;charset=utf-8"
  });
  const fileName = `${name}.xlsx`;
  //下载的文件名称及其后缀，后缀要和后台保持的一致
  if ("download" in document.createElement("a")) {
    // 非IE下载
    const elink = document.createElement("a");
    elink.download = fileName;
    elink.style.display = "none";
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    window.navigator["msSaveBlob"](blob, fileName);
  }
}