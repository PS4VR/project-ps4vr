import React from 'react';
import ReactDOM from 'react-dom';
import NewsItem from './NewsItem'

class NewsList extends React.Component {
  constructor(props) {
    super(props);

    this.listArray = [
      {
        title: "「PlayStation VR」今日在台開賣 上市慶祝活動熱烈登場 數十款 VR 內容同步推出",
        subTitle: "台灣索尼互動娛樂（SIET）為了慶祝 PS4 虛擬實境裝置「PlayStation VR（PS VR）」同步在台上市，今（13）日上午特別在台北地下街 6 號廣場舉辦 PS VR 上市慶祝活動。活動中邀請知名藝人納豆擔任一日店長，與 SIET 總經理江口達雄一同," +
        "登台，將 PS VR 與特製贈品親手交到受邀來場的預購玩家手中，一起熱烈歡慶 PS VR 的上市。",
        image_url: "https://p2.bahamut.com.tw/M/2KU/20/0001453120.JPG"
      },
      {
        title: "「PlayStation VR」今日在台開賣 上市慶祝活動熱烈登場 數十款 VR 內容同步推出",
        subTitle: "台灣索尼互動娛樂（SIET）為了慶祝 PS4 虛擬實境裝置「PlayStation VR（PS VR）」同步在台上市，今（13）日上午特別在台北地下街 6 號廣場舉辦 PS VR 上市慶祝活動。活動中邀請知名藝人納豆擔任一日店長，與 SIET 總經理江口達雄一同," +
        "登台，將 PS VR 與特製贈品親手交到受邀來場的預購玩家手中，一起熱烈歡慶 PS VR 的上市。",
        image_url: "https://p2.bahamut.com.tw/M/2KU/20/0001453120.JPG"
      },
      {
        title: "「PlayStation VR」今日在台開賣 上市慶祝活動熱烈登場 數十款 VR 內容同步推出",
        subTitle: "台灣索尼互動娛樂（SIET）為了慶祝 PS4 虛擬實境裝置「PlayStation VR（PS VR）」同步在台上市，今（13）日上午特別在台北地下街 6 號廣場舉辦 PS VR 上市慶祝活動。活動中邀請知名藝人納豆擔任一日店長，與 SIET 總經理江口達雄一同," +
        "登台，將 PS VR 與特製贈品親手交到受邀來場的預購玩家手中，一起熱烈歡慶 PS VR 的上市。",
        image_url: "https://p2.bahamut.com.tw/M/2KU/20/0001453120.JPG"
      }
    ];
  }

  renderItems() {

    return this.listArray.map((item, i) => {
      return (
        <NewsItem item={item} key={i}/>
      );
    });
  }

  render() {
    return(
      <div>
        { this.renderItems() }
      </div>
    );
  }
}

export default NewsList;
