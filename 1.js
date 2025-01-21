

// انتخاب تمامی المان‌هایی که دارای کلاس _df_custom هستند const elements = document.querySelectorAll('._df_custom');

// فیلتر کردن المان‌هایی که دارای ویژگی source هستند const downloadableLinks = Array.from(elements).map(element => element.getAttribute('source')).filter(source => source && source.endsWith('.pdf'));

// بررسی اینکه آیا لینک‌های دانلودی پیدا شده‌اند if (downloadableLinks.length === 0) { console.log('هیچ فایل PDF پیدا نشد.'); } else { console.log(تعداد فایل‌های پیدا شده: ${downloadableLinks.length});

// دانلود تمامی فایل‌های PDF
downloadableLinks.forEach(fileUrl => {
    const fileName = fileUrl.split('/').pop(); // استخراج نام فایل

    // ایجاد لینک دانلود به صورت داینامیک
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName; // تنظیم نام فایل
    document.body.appendChild(a);
    a.click(); // شبیه‌سازی کلیک
    document.body.removeChild(a); // حذف لینک ایجاد شده

    console.log(`دانلود فایل: ${fileName}`);
});

}
