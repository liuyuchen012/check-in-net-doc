# /// 生成 AgoraIn v4 宣传片旁白（edge-tts）
import asyncio, json, subprocess, sys, pathlib
import edge_tts

VOICE = "zh-CN-XiaoxiaoNeural"
RATE = "+8%"
PITCH = "+2Hz"

LINES = [
    ("s1", "点名、签到、批改、发成绩——琐碎的日常，正在偷走课堂时间。"),
    ("s2", "AgoraIn 4，课堂签到与教学管理一体化平台。"),
    ("s3", "手机一扫就签到，名字实时上大屏；前三名，金银铜，一目了然。"),
    ("s4", "点名、课时、积分、值日、座位、课表——一个后台，全部搞定。"),
    ("s5", "出卷、印答题卡、拍照扫卡；客观题本机秒判，主观题AI批改加人工复判，成绩一键统计。"),
    ("s6", "家长在小程序里看通知、看成绩、看值日，还能直接给老师留言。"),
    ("s7", "多机构数据隔离，文件加密上云，隐私自己说了算。"),
    ("s8", "AgoraIn 4，把时间还给课堂。"),
]

OUT = pathlib.Path(__file__).parent / "vo"
OUT.mkdir(parents=True, exist_ok=True)


def dur(path):
    r = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
        capture_output=True, text=True,
    )
    return float(r.stdout.strip())


async def main():
    results = []
    for key, text in LINES:
        path = OUT / f"{key}.mp3"
        # 音量统一：edge-tts 音量稳定，这里只做文本→语音
        comm = edge_tts.Communicate(text, VOICE, rate=RATE, pitch=PITCH)
        await comm.save(str(path))
        d = dur(path)
        results.append({"id": key, "text": text, "file": str(path), "dur": round(d, 3)})
        print(f"{key}: {d:.3f}s  {len(text)}字  {text}", flush=True)
    (OUT / "vo.json").write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    total = sum(r["dur"] for r in results)
    print(f"TOTAL speech: {total:.2f}s")


asyncio.run(main())
