#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
برنامه تولید محتوای شغل معماری با هوش مصنوعی - نسخه کامل
Architecture AI Content Generator - Full Version
قابلیت‌ها:
- تولید انواع محتوا
- ذخیره در فایل
- تولید پرامپت تصویر
- تقویم محتوایی ماهانه
- پرامپت‌های حرفه‌ای AI
"""

import os
import random
from datetime import datetime, timedelta
from pathlib import Path

from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from rich.prompt import Prompt, IntPrompt, Confirm
from rich import box
from rich.progress import Progress, SpinnerColumn, TextColumn

console = Console()

# ==================== پوشه ذخیره ====================
OUTPUT_DIR = Path("generated_content")
OUTPUT_DIR.mkdir(exist_ok=True)

# ==================== داده‌های پایه ====================

STYLES = [
    "مدرن مینیمال", "کلاسیک ایرانی", "معماری سنتی ایرانی", "معماری اسلامی",
    "معماری معاصر", "معماری پایدار و سبز", "معماری صنعتی", "معماری اسکاندیناوی",
    "معماری مدیترانه‌ای", "معماری بیوفیلیک", "معماری پارامتریک", "معماری ارگانیک",
    "نئوکلاسیک", "معماری ژاپنی", "های‌تک"
]

PROJECT_TYPES = [
    "ویلای لوکس", "آپارتمان مسکونی", "ساختمان اداری", "فضای تجاری",
    "کافه و رستوران", "هتل و اقامتگاه", "مرکز فرهنگی", "مسجد و مکان مذهبی",
    "ویلای کوهستانی", "خانه باغ", "پروژه بازسازی", "طراحی داخلی",
    "پنت‌هاوس", "مجتمع مسکونی", "فضای کار اشتراکی"
]

CONTENT_TYPES = {
    1: "کپشن اینستاگرام",
    2: "پست لینکدین",
    3: "توضیح پروژه (Portfolio)",
    4: "ایده پست و محتوای آموزشی",
    5: "پرامپت حرفه‌ای برای هوش مصنوعی",
    6: "هشتگ‌های تخصصی معماری",
    7: "متن تبلیغاتی خدمات معماری",
    8: "داستان پروژه (Storytelling)",
    9: "پرامپت تولید تصویر با AI",
    10: "تقویم محتوایی ماهانه",
    11: "ذخیره همه محتواهای اخیر",
}

# ==================== قالب‌های تولید محتوا ====================

def generate_instagram_caption(style, project):
    templates = [
        f"""🏠 {project} با سبک {style}

وقتی طراحی فقط زیبایی نیست، بلکه تجربه‌ی زندگی است...

در این پروژه سعی کردیم با ترکیب نور، متریال طبیعی و فرم‌های {style}، فضایی خلق کنیم که آرامش رو به ساکنین هدیه بده.

کدوم جزئیات این طراحی بیشتر به دلتون نشست؟ نظراتتون رو برامون بنویسید 👇

#معماری #طراحی_معماری #معماری_ایرانی""",
        
        f"""✨ معرفی پروژه: {project}

سبک: {style}
هدف: خلق فضایی که هم کاربردی باشه و هم هویت داشته باشه.

از انتخاب متریال تا جزئیات نورپردازی، همه چیز با دقت طراحی شده تا حس تعلق و آرامش رو منتقل کنه.

ذخیره کن و برای پروژه‌های بعدیت الهام بگیر 📌""",
        
        f"""چیزی که یک {project} رو خاص می‌کنه، فقط ظاهرش نیست.

در سبک {style} ما روی این موارد تمرکز کردیم:
• جریان نور طبیعی
• ارتباط داخل و خارج
• متریال‌های بومی و پایدار
• جزئیات انسانی

نظر شما چیه؟ کدوم اصل طراحی براتون مهم‌تره؟""",
        
        f"""طراحی {project} | سبک {style}

معماری یعنی ایجاد فضایی که آدم‌ها در آن زندگی کنند، نه فقط ساکن شوند.

در این پروژه، هر خط، هر متریال و هر نور با هدف خاصی انتخاب شده.
نتیجه؟ فضایی که نفس می‌کشد.

دوست دارید جزئیات بیشتری از این پروژه ببینید؟"""
    ]
    return random.choice(templates)


def generate_linkedin_post(style, project):
    templates = [
        f"""در دنیای معماری امروز، طراحی یک {project} فقط به معنای خلق فضا نیست؛ بلکه خلق تجربه است.

در پروژه‌ای که اخیراً با رویکرد {style} کار کردیم، تمرکز اصلی ما روی سه اصل بود:

۱. پایداری و استفاده هوشمند از منابع
۲. توجه به فرهنگ و هویت محلی
۳. ایجاد ارتباط عمیق بین کاربر و فضا

معماری خوب، فضایی می‌سازد که مردم نه تنها در آن زندگی می‌کنند، بلکه به آن تعلق پیدا می‌کنند.

شما در پروژه‌هایتان کدام اصل را در اولویت قرار می‌دهید؟""",
        
        f"""چرا سبک {style} در طراحی {project} همچنان محبوب است؟

چون این سبک:
• تعادل بین زیبایی و عملکرد برقرار می‌کند
• به نیاز واقعی کاربر احترام می‌گذارد
• با گذر زمان کهنه نمی‌شود

در پروژه‌های اخیرمان دیدیم که مشتریان بیش از پیش به کیفیت زندگی در فضا اهمیت می‌دهند، نه فقط متراژ یا ظاهر لوکس.

معماری آینده، معماری انسان‌محور است.""",
        
        f"""نکته‌ای که در طراحی {project} با رویکرد {style} آموختم:

جزئیات کوچک، تفاوت‌های بزرگ می‌سازند.

از انتخاب دستگیره در گرفته تا زاویه تابش نور در ساعت ۴ بعدازظهر، همه چیز مهم است.

معماری موفق، نتیجه‌ی توجه وسواس‌گونه به جزئیات و درک عمیق از نیازهای انسان است.

شما روی کدام جزئیات بیشتر وقت می‌گذارید؟"""
    ]
    return random.choice(templates)


def generate_project_description(style, project):
    return f"""عنوان پروژه: {project}
سبک طراحی: {style}

توضیحات:
این پروژه با رویکرد {style} طراحی شده است. هدف اصلی، ایجاد فضایی بود که ضمن پاسخگویی به نیازهای عملکردی، حس تعلق و آرامش را برای کاربران فراهم کند.

مفاهیم کلیدی طراحی:
• استفاده از نور طبیعی به عنوان عنصر اصلی فضا
• انتخاب متریال‌های پایدار و بومی
• ایجاد سلسله‌مراتب فضایی شفاف
• توجه به مقیاس انسانی و جزئیات لمسی

چالش‌ها و راه‌حل‌ها:
یکی از چالش‌های اصلی، ایجاد تعادل بین زیبایی بصری و عملکرد روزمره بود که با بازنگری مکرر طرح و گفتگوی مستمر با کارفرما حل شد.

نتیجه: فضایی که نه تنها دیده می‌شود، بلکه تجربه می‌شود."""


def generate_content_ideas(style, project):
    ideas = [
        f"۱. پشت‌صحنه طراحی {project} با سبک {style} (از اسکچ تا رندر)",
        f"۲. ۵ اصل مهم در طراحی {style} که هر معماری باید بداند",
        f"۳. مقایسه قبل و بعد بازسازی یک {project}",
        f"۴. اشتباهات رایج در طراحی داخلی {project} و راه‌حل‌ها",
        f"۵. چگونه متریال‌های طبیعی حس فضا را در سبک {style} تغییر می‌دهند",
        f"۶. تور مجازی از یک {project} تکمیل‌شده",
        f"۷. داستان یک جزئیات کوچک که کل پروژه را متحول کرد",
        f"۸. نکات نورپردازی در فضاهای {style}",
        f"۹. فرآیند انتخاب پالت رنگی برای {project}",
        f"۱۰. مصاحبه با کارفرما: تجربه زندگی در فضای طراحی‌شده"
    ]
    return "\n".join(random.sample(ideas, 6))


def generate_ai_prompt(style, project, content_type="کپشن اینستاگرام"):
    prompts = {
        "کپشن اینستاگرام": f"""یک کپشن اینستاگرام حرفه‌ای و جذاب به زبان فارسی برای یک پروژه معماری بنویس.
نوع پروژه: {project}
سبک: {style}
لحن: الهام‌بخش، حرفه‌ای و کمی احساسی
طول: حدود ۱۲۰ تا ۱۸۰ کلمه
در پایان ۳ سوال تعاملی از مخاطب بپرس و هشتگ‌های مرتبط پیشنهاد بده.""",

        "پست لینکدین": f"""یک پست لینکدین تخصصی در حوزه معماری بنویس.
موضوع: طراحی یک {project} با رویکرد {style}
لحن: حرفه‌ای، تحلیلی و ارزشمند
ساختار: مقدمه قوی + ۳ نکته کلیدی + نتیجه‌گیری + سوال برای تعامل
بدون استفاده از ایموجی زیاد.""",

        "توضیح پروژه": f"""یک توضیح حرفه‌ای و کامل برای بخش پورتفولیو یک معمار بنویس.
پروژه: {project}
سبک: {style}
شامل: مفهوم طراحی، چالش‌ها، راه‌حل‌ها، متریال‌ها و نتیجه نهایی.
لحن رسمی و تخصصی.""",

        "عمومی": f"""محتوای باکیفیت و تخصصی در حوزه معماری تولید کن.
موضوع: {project} با سبک {style}
زبان: فارسی
لحن: حرفه‌ای و جذاب"""
    }
    return prompts.get(content_type, prompts["عمومی"])


def generate_hashtags():
    base = [
        "#معماری", "#معماری_ایرانی", "#طراحی_معماری", "#معمار", "#معماری_مدرن",
        "#طراحی_داخلی", "#ویلا", "#معماری_پایدار", "#معماری_معاصر", "#رندر_معماری",
        "#اسکچ_معماری", "#معماری_سبز", "#طراحی_شهری", "#معماری_کلاسیک",
        "#Architecture", "#ArchitecturalDesign", "#ModernArchitecture", "#InteriorDesign",
        "#VillaDesign", "#SustainableArchitecture", "#PersianArchitecture"
    ]
    return " ".join(random.sample(base, 14))


def generate_ad_text(style, project):
    return f"""آیا به دنبال طراحی یک {project} منحصربه‌فرد هستید؟

ما با تخصص در سبک {style}، پروژه‌هایی خلق می‌کنیم که:
✓ هویت و شخصیت دارند
✓ با نیازهای واقعی شما هماهنگ‌اند
✓ ارزش افزوده‌ی بلندمدت ایجاد می‌کنند

از مشاوره اولیه تا اجرای نهایی، همراه شما هستیم.

برای دریافت مشاوره رایگان و مشاهده نمونه‌کارها، همین حالا پیام دهید."""


def generate_story(style, project):
    return f"""داستان یک پروژه: {project}

همه‌چیز از یک درخواست ساده شروع شد: «می‌خواهم فضایی داشته باشم که وقتی واردش می‌شوم، نفس بکشم.»

ما سبک {style} را انتخاب کردیم، نه چون مد روز بود، بلکه چون با روحیه کارفرما همخوانی داشت.

چالش اصلی، ایجاد تعادل بین زیبایی بصری و عملکرد روزمره بود. بارها اسکچ زدیم، مدل ساختیم و با کارفرما گفتگو کردیم.

نتیجه؟ فضایی که حالا نه تنها خانه است، بلکه بخشی از هویت ساکنین شده.

معماری واقعی، وقتی اتفاق می‌افتد که فضا، داستان زندگی آدم‌ها را تعریف کند."""


def generate_image_prompt(style, project, view_type="exterior"):
    """تولید پرامپت قوی برای تولید تصویر با هوش مصنوعی"""
    
    view_descriptions = {
        "exterior": "نمای خارجی، زاویه سه‌ربعی، نور طلایی غروب آفتاب، آسمان صاف",
        "interior": "نمای داخلی، فضای نشیمن، نور طبیعی از پنجره‌های بزرگ، مبلمان مدرن",
        "detail": "جزئیات معماری، بافت متریال، کلوزآپ دستگیره یا اتصال سازه",
        "aerial": "نمای هوایی، سایت پلان، محوطه‌سازی و ارتباط با طبیعت اطراف",
        "night": "نمای شب، نورپردازی گرم و دلنشین، بازتاب نور در شیشه‌ها",
        "moodboard": "مودبورد معماری شامل پالت رنگی، متریال‌ها، الهام‌ها و اسکچ‌ها"
    }
    
    view_desc = view_descriptions.get(view_type, view_descriptions["exterior"])
    
    english_prompt = f"""Professional architectural photography of a {project} in {style} style, {view_desc}, 
high-end architectural visualization, ultra realistic, 8k resolution, cinematic lighting, 
detailed materials, perfect composition, shot on medium format camera, architectural digest style, 
masterpiece, best quality, sharp focus --ar 16:9 --v 6"""

    persian_guide = f"""پرامپت تولید تصویر برای:
• پروژه: {project}
• سبک: {style}
• نوع نما: {view_type}

پرامپت انگلیسی (کپی کنید و در Midjourney / Flux / Grok Imagine / Leonardo استفاده کنید):

{english_prompt}

نکات استفاده:
- در Midjourney: پرامپت را مستقیم وارد کنید
- در Grok Imagine یا Flux: می‌توانید فارسی هم اضافه کنید
- برای نتایج بهتر، کلمات کلیدی مثل "photorealistic" یا "cinematic" را حفظ کنید"""

    return persian_guide


def generate_monthly_calendar(style, project, month_name="ماه جاری"):
    """تولید تقویم محتوایی ۳۰ روزه"""
    
    post_types = [
        ("کپشن + تصویر پروژه", "نمایش کار"),
        ("محتوای آموزشی", "ارزش‌آفرینی"),
        ("پشت‌صحنه طراحی", "ارتباط انسانی"),
        ("قبل و بعد", "اثبات تخصص"),
        ("نکته روز معماری", "آموزش کوتاه"),
        ("داستان پروژه", "Storytelling"),
        ("پرسش و پاسخ", "تعامل"),
        ("معرفی متریال", "تخصصی"),
        ("الهام از طبیعت/تاریخ", "الهام‌بخش"),
        ("فراخوان به اقدام", "جذب مشتری")
    ]
    
    calendar_lines = [f"# تقویم محتوایی {month_name} - تمرکز: {project} | سبک: {style}\n"]
    calendar_lines.append("| روز | نوع محتوا | موضوع پیشنهادی | هدف |\n")
    calendar_lines.append("|-----|-----------|----------------|-----|\n")
    
    start_date = datetime.now().replace(day=1)
    
    for day in range(1, 31):
        post_type, goal = random.choice(post_types)
        topic_ideas = [
            f"جزئیات {style} در {project}",
            f"نورپردازی در فضای {project}",
            f"انتخاب متریال برای {style}",
            f"چالش‌های طراحی {project}",
            f"ایده‌های خلاقانه {style}",
            f"تجربه کارفرما از {project}",
            f"مقایسه سبک‌ها با تمرکز روی {style}",
            f"نکات اجرایی {project}",
            f"پالت رنگی پیشنهادی {style}",
            f"ارتباط فضا با طبیعت در {project}"
        ]
        topic = random.choice(topic_ideas)
        date_str = (start_date + timedelta(days=day-1)).strftime("%Y-%m-%d")
        calendar_lines.append(f"| {day} ({date_str}) | {post_type} | {topic} | {goal} |\n")
    
    calendar_lines.append("\n## نکات اجرای تقویم:\n")
    calendar_lines.append("- هر هفته حداقل ۲ پست نمایش کار + ۲ پست آموزشی\n")
    calendar_lines.append("- استوری‌های روزانه برای افزایش تعامل\n")
    calendar_lines.append("- یک ریلز آموزشی در هفته\n")
    calendar_lines.append("- آخر هفته‌ها محتوای سبک‌تر و الهام‌بخش\n")
    
    return "".join(calendar_lines)


# ==================== ذخیره فایل ====================

def save_to_file(content, filename_prefix, extension="md"):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = OUTPUT_DIR / f"{filename_prefix}_{timestamp}.{extension}"
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
    
    return str(filename)


def save_multiple(contents_dict):
    """ذخیره چندین محتوا در یک فایل"""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = OUTPUT_DIR / f"architecture_content_pack_{timestamp}.md"
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(f"# بسته محتوای معماری\n")
        f.write(f"تاریخ تولید: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n\n")
        for title, content in contents_dict.items():
            f.write(f"## {title}\n\n{content}\n\n---\n\n")
    
    return str(filename)


# ==================== رابط کاربری CLI ====================

def show_header():
    console.print(Panel.fit(
        "[bold cyan]🏗️  برنامه تولید محتوای شغل معماری با هوش مصنوعی[/bold cyan]\n"
        "[bold white]نسخه کامل • Full Version[/bold white]\n"
        "[dim]شامل: تولید محتوا • پرامپت تصویر • تقویم ماهانه • ذخیره فایل[/dim]",
        border_style="cyan",
        padding=(1, 4)
    ))


def show_menu():
    table = Table(title="منوی اصلی", box=box.ROUNDED, border_style="blue", show_lines=True)
    table.add_column("شماره", style="cyan", justify="center", width=8)
    table.add_column("نوع محتوا / قابلیت", style="white")
    
    for num, name in CONTENT_TYPES.items():
        table.add_row(str(num), name)
    
    table.add_row("0", "[bold red]خروج از برنامه[/bold red]")
    console.print(table)


def get_user_choices():
    console.print("\n[bold yellow]⚙️  تنظیمات محتوا:[/bold yellow]")
    
    style = Prompt.ask(
        "سبک معماری را وارد کنید (یا Enter برای تصادفی)",
        default=random.choice(STYLES)
    )
    
    project = Prompt.ask(
        "نوع پروژه را وارد کنید (یا Enter برای تصادفی)",
        default=random.choice(PROJECT_TYPES)
    )
    
    return style, project


def main():
    show_header()
    last_generated = {}  # برای ذخیره اخیر
    
    while True:
        show_menu()
        choice = IntPrompt.ask("\n[bold green]گزینه مورد نظر را انتخاب کنید[/bold green]", default=0)
        
        if choice == 0:
            console.print("\n[bold cyan]خداحافظ! موفق باشی معمار خلاق 👋[/bold cyan]\n")
            break
        
        if choice not in CONTENT_TYPES:
            console.print("[red]گزینه نامعتبر است![/red]")
            continue
        
        # گزینه‌های خاص که نیاز به style/project ندارند
        if choice == 11:
            if not last_generated:
                console.print("[yellow]هنوز محتوایی تولید نشده است.[/yellow]")
                continue
            path = save_multiple(last_generated)
            console.print(f"[bold green]✅ همه محتواها ذخیره شد:[/bold green] {path}")
            continue
        
        style, project = get_user_choices()
        content_name = CONTENT_TYPES[choice]
        
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console
        ) as progress:
            progress.add_task(description=f"در حال تولید «{content_name}»...", total=None)
            
            if choice == 1:
                result = generate_instagram_caption(style, project)
            elif choice == 2:
                result = generate_linkedin_post(style, project)
            elif choice == 3:
                result = generate_project_description(style, project)
            elif choice == 4:
                result = generate_content_ideas(style, project)
            elif choice == 5:
                sub_type = Prompt.ask(
                    "برای چه نوع محتوایی پرامپت می‌خواهید؟",
                    choices=["کپشن اینستاگرام", "پست لینکدین", "توضیح پروژه", "عمومی"],
                    default="کپشن اینستاگرام"
                )
                result = generate_ai_prompt(style, project, sub_type)
            elif choice == 6:
                result = generate_hashtags()
            elif choice == 7:
                result = generate_ad_text(style, project)
            elif choice == 8:
                result = generate_story(style, project)
            elif choice == 9:
                view_type = Prompt.ask(
                    "نوع نما را انتخاب کنید",
                    choices=["exterior", "interior", "detail", "aerial", "night", "moodboard"],
                    default="exterior"
                )
                result = generate_image_prompt(style, project, view_type)
            elif choice == 10:
                month = Prompt.ask("نام ماه را وارد کنید", default="ماه جاری")
                result = generate_monthly_calendar(style, project, month)
        
        # نمایش نتیجه
        console.print(Panel(
            result,
            title=f"[bold]{content_name}[/bold]",
            border_style="green",
            padding=(1, 2)
        ))
        
        # ذخیره در حافظه اخیر
        last_generated[content_name] = result
        
        # پیشنهاد ذخیره
        if Confirm.ask("\n[bold yellow]می‌خواهید این محتوا را در فایل ذخیره کنید؟[/bold yellow]", default=True):
            prefix = content_name.replace(" ", "_").replace("(", "").replace(")", "")
            path = save_to_file(result, prefix)
            console.print(f"[bold green]✅ ذخیره شد:[/bold green] {path}")
        
        console.print("\n[dim]" + "─" * 60 + "[/dim]\n")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        console.print("\n\n[bold cyan]برنامه با موفقیت بسته شد.[/bold cyan]")
