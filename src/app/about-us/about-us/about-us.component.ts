import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public textAreaForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.textAreaForm = fb.group({
      strJson: "",
      parsedJson: ""
    });
  }

  ngOnInit(): void {
  }
  parseJson() {
    var textareaElement = document.getElementById("rss");
    var content = this.textAreaForm.get("strJson")?.value;
    if (content) {

      content = JSON.parse(content);
      if (textareaElement !== null)
        textareaElement.innerHTML = JSON.stringify(content, undefined, 4);
    }
    else {
      if (textareaElement !== null)
        textareaElement.innerHTML = "";
    }
  }

  minify() {
    var textareaElement = document.getElementById("rss");
    var content = this.textAreaForm.get("strJson")?.value;
    if (content) {
      content = JSON.parse(content);

      if (textareaElement !== null)
        textareaElement.innerHTML = JSON.stringify(content);
    }
    else {
      if (textareaElement !== null)
        textareaElement.innerHTML = "";
    }

  }
  clear() {
    this.textAreaForm.get("strJson")?.setValue("");
  }

  copyFormattedJson() {
    var textareaElement = document.getElementById("rss");
    if (textareaElement !== null)
      navigator.clipboard.writeText(textareaElement.innerHTML);
  }


}
