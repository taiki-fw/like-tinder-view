import React, { Component } from "react";
import Hammer from "react-hammerjs"; // Hammer.jsを使えるように読み込みます.

// スワイプで開いたときの距離.
const SWIPED_DISTANCE = window.innerWidth * 0.2;

class Cell extends Component {
  constructor(props) {
    super(props);

    // 初期状態を定義します
    this.state = {
      // 指で動かしている時の移動距離.
      deltaX: 0
    };
  }

  // スワイプの開始位置を計算して返します.
  // open状態であれば-150pxがスタート地点、それ以外は0px.
  getFirstPosition() {
    return this.state.opened ? -1 * SWIPED_DISTANCE : 0;
  }

  // 指でのドラッグが始まった時.
  onPanStart(e) {
    // 最初のCellの位置を設定します.
    this.setState({
      deltaX: this.getFirstPosition()
    });
  }

  // 指でドラッグしている.
  onPan(e) {
    // 指で動かした分だけ、移動距離を変化させます.
    this.setState({
      deltaX: this.getFirstPosition() + e.deltaX
    });
  }

  // ドラッグ終了
  onPanEnd(e) {
    if (Math.abs(this.state.deltaX) >= SWIPED_DISTANCE) {
      window.alert("表示している要素を削除します");
    } else {
      this.setState({ deltaX: 0 });
    }
  }

  render() {
    // スワイプ量に合わせて、要素の位置を変更する.
    let style = {
      transform: `translate(${this.state.deltaX}px, 0)`,
      backgroundColor: "white",
      width: "80%",
      margin: "0 auto"
    };

    return (
      <Hammer
        onPanStart={this.onPanStart.bind(this)}
        onPan={this.onPan.bind(this)}
        onPanEnd={this.onPanEnd.bind(this)}
      >
        <div style={style}>テスト</div>
      </Hammer>
    );
  }
}

export default Cell;
