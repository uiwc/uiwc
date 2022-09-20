import { i18n } from "../../i18n/language";
import { Utils } from "../../utils";

export function process(
  validators: { [key: string]: any } = {},
  type: string = ""
) {
  const processed: any = {};

  Object.entries(validators).forEach(([key, data]: [string, any]) => {
    const lkey = key.toLowerCase();
    let value: any;
    let message: any;
    const argMap: any = {
      min: "min",
      max: "max",
      minlength: "minlength",
      maxlength: "maxlength",
    };
    const strArg = argMap[lkey] || lkey;

    if (Utils.isObject(data)) {
      value = data?.value;
      message = data?.message;
    } else {
      value = data;
    }

    if (key === "email") {
      // lkey = seguira siendo "email" para mostrar el error correspondiente
      key = "pattern";
      value = /^[A-Z0-9._-]+@[A-Z0-9-_.]+\.[A-Z]{2,}$/gi;
    }

    if (key === "phone") {
      // lkey = seguira siendo "phone" para mostrar el error correspondiente
      key = "pattern";
      value =
        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/gi;
    }

    message = Utils.isUndefined(message)
      ? i18n(`ui.components.forms.errors.${lkey}`, {
          [strArg]: value,
        })
      : message;

    if (lkey === "match") {
      processed["validate"] = (v: any) => value(v) || message;
    } else if (lkey === `${type}match`) {
      processed["validate"] = (v: any) =>
        value(v) || i18n(`ui.components.forms.errors.${type}DontMatch`);
    } else {
      processed[key] = {
        value,
        message,
      };
    }
  });

  return processed;
}
