export function getSpanArr(data: Record<string, any>[], mergedColumns: string[]): Record<string, any> {
  const spanMap: Record<string, any> = {}
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      mergedColumns.forEach((column) => {
        spanMap[column] = {
          spanArr: [1],
          pos: 0
        }
      })
    } else {
      for (let n = 0; n < mergedColumns.length; n++) {
        if (data[i][mergedColumns[n]] === data[i - 1][mergedColumns[n]]) {
          spanMap[mergedColumns[n]].spanArr[spanMap[mergedColumns[n]].pos] += 1
          spanMap[mergedColumns[n]].spanArr.push(0)
        } else {
          spanMap[mergedColumns[n]].spanArr.push(1)
          spanMap[mergedColumns[n]].pos = i
        }
      }
    }
  }
  return spanMap
}

export function objectSpanMethod(cell: any, spanMap: Record<string, any>) {
  if (spanMap[cell.column.property] && cell.column.property) {
    const row = spanMap[cell.column.property].spanArr[cell.rowIndex]
    const col = row > 0 ? 1 : 0
    return {
      rowspan: row,
      colspan: col
    }
  }
}
export function UrlDownload(url: string, name: string) {
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', name)
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function BlobDownload(res: Blob, headers: { 'content-disposition': string }) {
  const blob = new Blob([res])
  const link = document.createElement('a')
  const body = document.querySelector('body') as HTMLBodyElement
  link.href = window.URL.createObjectURL(blob)
  link.target = '_blank'
  link.download = decodeURIComponent(headers['content-disposition'].replace('attachment;filename=', ''))
  link.style.display = 'none'
  body.appendChild(link)
  link.click()
  body.removeChild(link)
  window.URL.revokeObjectURL(link.href)
}


export function dateFormat(time: Date) {
  let ymd = "";
  let mouth =
    time.getMonth() + 1 >= 10
      ? time.getMonth() + 1
      : "0" + (time.getMonth() + 1);
  let day = time.getDate() >= 10 ? time.getDate() : "0" + time.getDate();
  ymd += time.getFullYear() + "-";
  ymd += mouth + "-";
  ymd += day;
  return ymd;
}

export function getDateScope(start: string, end: string): string[] {
  let dateArr = [];
  let startArr = start.split("-");
  let endArr = end.split("-");
  let db = new Date();
  db.setUTCFullYear(startArr[0], startArr[1] - 1, startArr[2]);
  let de = new Date();
  de.setUTCFullYear(endArr[0], endArr[1] - 1, endArr[2]);
  let unixDb = db.getTime();
  let unixDe = de.getTime();
  let stamp;
  const oneDay = 24 * 60 * 60 * 1000;
  for (stamp = unixDb; stamp <= unixDe;) {
    dateArr.push(dateFormat(new Date(parseInt(stamp))));
    stamp = stamp + oneDay;
  }
  return dateArr;
};

export function getDefaultDateScope(total: number) {
  return new Array(total).fill(0).map((_, idx) => dateFormat(new Date(new Date().getTime() - idx * (24 * 60 * 60 * 1000)))).reverse()
}

export function getQueryString(url: string, name: string) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  let r = url.split('?')[1]?.match(reg)
  if (r != null) return decodeURIComponent(r[2]) as number
  return 0
}